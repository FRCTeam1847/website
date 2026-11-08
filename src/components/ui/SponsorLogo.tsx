import { useState } from "react";
import { ItemMedia } from "./item";

export function SponsorLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <ItemMedia
      variant="image"
      className="size-20 p-2 sm:size-24 [&_img]:object-contain"
    >
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </ItemMedia>
  );
}
