import { createFileRoute } from "@tanstack/react-router";

const IMAGE_EXTENSION = /\.(?:avif|gif|jpe?g|png|webp)$/i;

function isPiwigoImagePath(path: string) {
	const normalizedPath = path.toLowerCase();
	const isStaticUpload =
		/^\/(?:_data\/i\/upload|upload)\/[a-z0-9._~/-]+$/i.test(normalizedPath);
	const isDerivative =
		normalizedPath.startsWith("/i.php?") && normalizedPath.includes("/upload/");

	return (
		!normalizedPath.includes("..") &&
		IMAGE_EXTENSION.test(normalizedPath) &&
		(isStaticUpload || isDerivative)
	);
}

export const Route = createFileRoute("/api/media/asset")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const requestUrl = new URL(request.url);
				const path = requestUrl.searchParams.get("path");

				if (
					!path ||
					path.length > 2048 ||
					!path.startsWith("/") ||
					path.startsWith("//") ||
					path.includes("\\") ||
					!isPiwigoImagePath(path)
				) {
					return new Response("Invalid media asset path.", { status: 400 });
				}

				const configuredOrigin = process.env.PIWIGO_BASE_URL;
				if (!configuredOrigin) {
					return new Response("PIWIGO_BASE_URL is not configured.", {
						status: 500,
					});
				}

				const originUrl = new URL(configuredOrigin);
				if (
					!["http:", "https:"].includes(originUrl.protocol) ||
					originUrl.username ||
					originUrl.password ||
					(originUrl.pathname !== "/" && originUrl.pathname !== "")
				) {
					return new Response("PIWIGO_BASE_URL must be an HTTP(S) origin.", {
						status: 500,
					});
				}

				const upstreamUrl = new URL(path, originUrl.origin);
				if (upstreamUrl.origin !== originUrl.origin) {
					return new Response("Invalid media asset origin.", { status: 400 });
				}

				const upstream = await fetch(upstreamUrl, {
					signal: AbortSignal.timeout(20_000),
					redirect: "error",
				});
				if (!upstream.ok) {
					return new Response("Unable to load media asset.", {
						status: upstream.status,
					});
				}

				const contentType = upstream.headers.get("content-type");
				if (!contentType?.toLowerCase().startsWith("image/")) {
					return new Response("Piwigo returned a non-image asset.", {
						status: 502,
					});
				}

				const headers = new Headers({
					"Cache-Control": "public, max-age=3600",
					"Content-Type": contentType,
					"X-Content-Type-Options": "nosniff",
				});
				for (const header of ["content-length", "etag", "last-modified"]) {
					const value = upstream.headers.get(header);
					if (value) headers.set(header, value);
				}

				return new Response(upstream.body, { headers });
			},
		},
	},
});
