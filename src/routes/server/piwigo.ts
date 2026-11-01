import { createServerFn } from "@tanstack/react-start";

const PAGE_SIZE = 24;
const MAX_PAGE = 100_000;

function validateMediaRequest(input: unknown): MediaRequest {
  if (typeof input !== "object" || input === null) {
    throw new Error("Invalid media request.");
  }

  const request = input as Record<string, unknown>;
  const albumId = request.albumId;
  const page = request.page ?? 0;

  if (
    albumId !== undefined &&
    (typeof albumId !== "number" ||
      !Number.isSafeInteger(albumId) ||
      albumId < 1)
  ) {
    throw new Error("Invalid album ID.");
  }

  if (
    typeof page !== "number" ||
    !Number.isSafeInteger(page) ||
    page < 0 ||
    page > MAX_PAGE
  ) {
    throw new Error("Invalid media page.");
  }

  return { albumId, page };
}

function getPiwigoOrigin() {
  const configuredUrl = process.env.PIWIGO_BASE_URL;
  if (!configuredUrl) {
    throw new Error(
      "PIWIGO_BASE_URL must be configured on the website server.",
    );
  }

  const url = new URL(configuredUrl);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    (url.pathname !== "/" && url.pathname !== "")
  ) {
    throw new Error(
      "PIWIGO_BASE_URL must be an HTTP(S) origin without a path.",
    );
  }

  return url.origin;
}

function toPublicAssetUrl(assetUrl: string, origin: string) {
  const url = new URL(assetUrl, origin);
  if (url.origin !== origin) {
    throw new Error("Piwigo returned an asset URL from an unexpected host.");
  }

  return `/api/media/asset?path=${encodeURIComponent(`${url.pathname}${url.search}`)}`;
}

async function requestPiwigo<T>(
  origin: string,
  method: string,
  parameters: Record<string, string>,
): Promise<T> {
  const endpoint = new URL(`${origin}/ws.php`);
  endpoint.searchParams.set("format", "json");
  const body = new URLSearchParams({ method, ...parameters });
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    const responseType = response.headers.get("content-type") ?? "unknown";
    throw new Error(
      `Piwigo request failed (${response.status}; ${responseType}).`,
    );
  }

  const responseText = await response.text();
  let payload: PiwigoResponse<T>;
  try {
    payload = JSON.parse(responseText) as PiwigoResponse<T>;
  } catch {
    const responseType = response.headers.get("content-type") ?? "unknown";
    const excerpt = responseText.slice(0, 160).replace(/\s+/g, " ").trim();
    throw new Error(
      `Piwigo returned a non-JSON response (${response.status}; ${responseType}): ${excerpt}`,
    );
  }

  if (payload.stat !== "ok" || payload.result === undefined) {
    throw new Error(payload.message ?? "Piwigo returned an invalid response.");
  }

  return payload.result;
}

export const getMediaGallery = createServerFn()
  .validator(validateMediaRequest)
  .handler(async ({ data }) => {
    const origin = getPiwigoOrigin();
    const categoryParameters: Record<string, string> =
      data.albumId === undefined ? {} : { cat_id: String(data.albumId) };
    const categoriesRequest = requestPiwigo<CategoriesResult>(
      origin,
      "pwg.categories.getList",
      categoryParameters,
    );
    const imagesRequest =
      data.albumId === undefined
        ? Promise.resolve<ImagesResult | null>(null)
        : requestPiwigo<ImagesResult>(origin, "pwg.categories.getImages", {
            cat_id: String(data.albumId),
            per_page: String(PAGE_SIZE),
            page: String(data.page),
          });

    const [categoryResult, imageResult] = await Promise.all([
      categoriesRequest,
      imagesRequest,
    ]);

    const categories = await Promise.all(
      categoryResult.categories.map(async (category) => {
        const representative = category.representative_picture_id
          ? await requestPiwigo<PiwigoImage>(origin, "pwg.images.getInfo", {
              image_id: String(category.representative_picture_id),
            })
          : null;
        const coverUrl =
          representative?.derivatives?.small?.url ?? category.tn_url;

        return {
          ...category,
          tn_url: coverUrl ? toPublicAssetUrl(coverUrl, origin) : null,
        };
      }),
    );

    const selectedCategory =
      data.albumId === undefined
        ? null
        : (categories.find((category) => category.id === data.albumId) ?? null);
    const childCategories = categories.filter((category) =>
      data.albumId === undefined
        ? category.id_uppercat === null
        : String(category.id_uppercat) === String(data.albumId),
    );
    const images = (imageResult?.images ?? []).map((image) => ({
      ...image,
      element_url: toPublicAssetUrl(image.element_url, origin),
      derivatives: image.derivatives
        ? Object.fromEntries(
            Object.entries(image.derivatives).map(([size, derivative]) => [
              size,
              {
                ...derivative,
                url: toPublicAssetUrl(derivative.url, origin),
              },
            ]),
          )
        : undefined,
    }));

    return {
      categories: childCategories,
      selectedCategory,
      images,
      totalImages: imageResult?.paging.total_count ?? 0,
    };
  });
