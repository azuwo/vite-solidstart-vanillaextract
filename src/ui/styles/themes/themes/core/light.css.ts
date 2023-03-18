import { createTheme } from "@vanilla-extract/css";
import { ThemeC } from "../../contract.css";


export const CoreLightTheme = createTheme(ThemeC, {
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});
