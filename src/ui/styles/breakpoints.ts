import { ComplexStyleRule } from "@vanilla-extract/css";

export type BreakpointTypes = "sm" | "md" | "lg";

export const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 768,
  lg: 1024,
};
export const minW: any = (
  type: BreakpointTypes,
  styles: Array<ComplexStyleRule>
) => ({
  [`(min-width: ${breakpoints[type]}px)`]: styles,
});

export const maxW: any = (
  type: BreakpointTypes,
  styles: Array<ComplexStyleRule>
) => ({
  [`(max-width: ${breakpoints[type]}px)`]: styles,
});
