export function getSponsorImageUrl(value: string | null) {
  const trimmedValue = value?.trim();
  if (!trimmedValue) return null;

  try {
    if (/^https?:\/\//i.test(trimmedValue)) {
      const url = new URL(trimmedValue);
      return url.protocol === "http:" || url.protocol === "https:"
        ? url.toString()
        : null;
    }

    if (trimmedValue.startsWith("//")) return `https:${trimmedValue}`;

    return `/${trimmedValue.replace(/\\/g, "/").replace(/^\/+/, "")}`;
  } catch {
    return null;
  }
}