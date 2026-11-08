export interface CallToAction {
  text?: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  type?: "button" | "submit" | "reset";
}
