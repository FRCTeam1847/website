import type { FeatureItem } from "../../types/UI/FeatureItem";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { CircleIcon } from "lucide-react";

interface ItemGridProps {
  items: Array<FeatureItem>;
}

export default function ItemGrid({ items }: ItemGridProps) {
  return (
    <ItemGroup className="grid w-full max-w-8xl mx-auto gap-6 p-4 grid-cols-1 sm:max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
      {items?.map(({ title, description, callToAction, icon }) => (
        <Item
		key={title}
          variant="outline"
          render={
            <a
              href={callToAction?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
          }
        />
      ))}
    </ItemGroup>
  );
}
