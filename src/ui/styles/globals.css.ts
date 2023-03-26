import { globalStyle } from "@vanilla-extract/css";
import { Fonts } from "./fonts.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html,body", {
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: `${Fonts.aqua}`,
  height: "100vh",
});
globalStyle("a", {
  marginRight: "1rem",
});
globalStyle("main", {
  textAlign: "center",
  padding: "1em",
  margin: "0 auto",
});
globalStyle("h1", {
  color: "#335d92",
  textTransform: "uppercase",
  fontSize: "4rem",
  fontWeight: "100",
  lineHeight: "1.1",
  margin: "4rem auto",
  maxWidth: "14rem",
  "@media": {
    "(min-width: 480px)": {
      maxWidth: "none",
    },
  },
});
globalStyle("p", {
  maxWidth: "14rem",
  margin: "2rem auto",
  lineHeight: "1.35",
  "@media": {
    "(min-width: 480px)": {
      maxWidth: "none",
    },
  },
});
