import { style } from "@vanilla-extract/css";
import { px2rem } from "~/ui/styles/utils";

const Wrapper = style([
  {
    display: "grid",
    gridTemplateColumns: "5% 1fr 5%",
    alignItems: "center",
    padding: `0 ${px2rem(16)}`,
    textAlign: "center",
  },
]);

const Logo = style([
  {
    width: px2rem(32),
  },
]);

export default {
  Wrapper,
  Logo,
};
