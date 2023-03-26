export type BreakpointTypes = "sm" | "md" | "lg";

export const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 768,
  lg: 1024,
};

export const includeMedia = (type: BreakpointTypes, styles: string) =>
  `@media (min-width: ${breakpoints[type]}px) {${styles}}`;
