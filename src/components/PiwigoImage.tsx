import { useEffect, useRef, useState } from "react";

export default function PiwigoImage({
	src,
	alt,
	className,
}: {
	src: string;
	alt: string;
	className: string;
}) {
	const containerRef = useRef<HTMLSpanElement>(null);
	const [objectUrl, setObjectUrl] = useState<string>();
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const controller = new AbortController();
		let createdObjectUrl: string | undefined;

		async function loadImage() {
			try {
				const response = await fetch(src, { signal: controller.signal });
				if (!response.ok) {
					throw new Error(`Image request failed (${response.status}).`);
				}

				const blob = await response.blob();
				if (!blob.type.startsWith("image/")) {
					throw new Error("The media server returned a non-image response.");
				}

				createdObjectUrl = URL.createObjectURL(blob);
				setObjectUrl(createdObjectUrl);
			} catch (error) {
				if (controller.signal.aborted) return;
				console.error("Unable to load Piwigo image.", error);
				setHasError(true);
			}
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					observer.disconnect();
					void loadImage();
				}
			},
			{ rootMargin: "200px" },
		);
		observer.observe(container);

		return () => {
			observer.disconnect();
			controller.abort();
			if (createdObjectUrl) URL.revokeObjectURL(createdObjectUrl);
		};
	}, [src]);

	return (
		<span ref={containerRef} className="block">
			{objectUrl ? (
				<img src={objectUrl} alt={alt} className={className} />
			) : (
				<span
					className={`block ${className.replace("object-cover", "")}`}
					aria-hidden={!hasError}
				>
					{hasError ? "Image unavailable" : null}
				</span>
			)}
		</span>
	);
}
