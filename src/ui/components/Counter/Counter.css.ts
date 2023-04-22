import { style } from "@vanilla-extract/css";
import { minW } from "~/ui/styles/breakpoints";
import { ThemeC } from "~/ui/styles/themes/contract.css";
import { px2rem } from "~/ui/styles/utils";

const myStyle = style([
  {
    "@media": minW("sm", {
      borderRadius: `${px2rem(8)}`,
    }),
    fontFamily: "inherit",
    fontSize: "inherit",
    padding: `${px2rem(16)} ${px2rem(32)}`,
    color: ThemeC.colors.brand,
    borderRadius: "2em",
    border: "2px solid rgba(68, 107, 158, 0)",
    outline: "none",
    width: "200px",
    fontVariantNumeric: "tabular-nums",
    ":focus": {
      border: "2px solid #335d92",
    },
    ":active": {
      backgroundColor: "rgba(68, 107, 158, 0.2)",
    },
  },
]);

export default {
  myStyle,
};
