import { style } from "@vanilla-extract/css";
import { ThemeC } from "~/ui/styles/themes/contract.css";

const myStyle = style({
  backgroundColor: "rgba(68, 107, 158, 0.1)",
  fontFamily: "inherit",
  fontSize: "inherit",
  padding: "1em 2em",
  color: ThemeC.color.brand,
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
});


export default {
  myStyle,
}