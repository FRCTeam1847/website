import type { CallToAction } from "./CallToAction";
import type * as React from "react";

export interface FeatureItem {
  title?: string;
  description?: React.ReactNode;
  icon?: any;
  //   classes?: Record<string, string>;
  callToAction?: CallToAction;
  imgsrc?: string;
}
