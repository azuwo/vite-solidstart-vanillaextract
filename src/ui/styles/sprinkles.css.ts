import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {},
});

export const sprinkles = createSprinkles(
  responsiveProperties
  //   colorModeProperties
);
