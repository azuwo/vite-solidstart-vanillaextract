import { globalStyle } from "@vanilla-extract/css";
import { ThemeC } from "~/ui/styles/themes/contract.css";
import { Fonts } from "./fonts.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html", {
  height: "100vh",
});

globalStyle("html,body", {
  margin: 0,
  padding: 0,
  backgroundColor: ThemeC.colors.background.global_90,
});

globalStyle("body", {
  height: "100%",
  fontFamily: Fonts.aqua,
});
