import { style } from "@vanilla-extract/css";
import { px2rem } from "~/ui/styles/utils";

const Wrapper = style([
  {
    height: "100%",
    display: "grid",
    gridTemplateRows: `5% 1fr 10%`,
    gap: px2rem(16),
  },
]);

export default {
  Wrapper,
};
