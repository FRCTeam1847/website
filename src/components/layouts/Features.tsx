import type { FeatureItem } from "../../types/UI/FeatureItem";
import ItemGrid from "../fragments/ItemGrid";

interface FeatureProps {
  title: string;
  subtitle?: string;
  items: Array<FeatureItem>;
}

export default function Features({
  title,
  subtitle: description,
  items,
}: FeatureProps) {
  return (
    <div className="rise-in text-center pt-16">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold">{title}</h2>
      <p className="leading-7 text-slate-700">{description}</p>

      <ItemGrid items={items} />
    </div>
  );
}
