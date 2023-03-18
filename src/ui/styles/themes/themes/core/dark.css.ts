import { createTheme } from "@vanilla-extract/css";
import { ThemeC } from "../../contract.css";

export const CoreDarkTheme = createTheme(ThemeC, {
  color: {
    brand: "black",
  },
  font: {
    body: "arial",
  },
});
