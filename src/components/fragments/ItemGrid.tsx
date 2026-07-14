import type { FeatureItem } from "../../types/UI/FeatureItem";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { CircleIcon } from "lucide-react";

interface ItemGridProps {
  items: Array<FeatureItem>;
}

export default function ItemGrid({ items }: ItemGridProps) {
  return (
    <ItemGroup className="grid w-full max-w-8xl mx-auto gap-6 p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items?.map(({ title, description, callToAction, icon, imgsrc }) => {
        const itemContent = (
          <>
            {imgsrc && (
              <ItemHeader>
                <img
                  src={imgsrc}
                  alt={title}
                  width={64}
                  height={64}
                  className="aspect-square w-full rounded-sm object-fit p-10 bg-muted-foreground"
                />
              </ItemHeader>
            )}
            <ItemMedia variant="default">
              <CircleIcon
                size={18}
                fill="var(--wyandotte-red)"
                strokeWidth={0}
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{title}</ItemTitle>
              <ItemDescription>{description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ItemMedia>{icon}</ItemMedia>
            </ItemActions>
          </>
        );

        return (
          <Item
            key={title}
            variant="outline"
            role="listitem"
            render={
              callToAction?.href ? (
                <a
                  href={callToAction.href}
                  target={callToAction.target ?? "_blank"}
                  download={callToAction.download ?? ""}
                  rel="noopener noreferrer"
                  aria-label={title}
                >
                  {itemContent}
                </a>
              ) : (
                <div>{itemContent}</div>
              )
            }
          />
        );
      })}
    </ItemGroup>
  );
}
