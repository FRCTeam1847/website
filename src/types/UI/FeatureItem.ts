import type { CallToAction } from "./CallToAction";

export interface FeatureItem {
  title?: string;
  description?: string;
  icon?: any;
  //   classes?: Record<string, string>;
  callToAction?: CallToAction;
  //   image?: Image;
}
