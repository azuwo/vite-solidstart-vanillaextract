import { style } from "@vanilla-extract/css";
import { ThemeC } from "~/ui/styles/themes/contract.css";
import { px2rem } from "~/ui/styles/utils";

const myStyle = style([
  {
    backgroundColor: "lightblue",
    fontFamily: "inherit",
    fontSize: "inherit",
    padding: `${px2rem(16)} ${px2rem(32)}`, //"1em 2em",
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
