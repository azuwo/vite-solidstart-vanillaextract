import { createTheme } from "@vanilla-extract/css";
import { ThemeC } from "../../contract.css";

export const CoreDarkTheme = createTheme(ThemeC, {
  colors: {
    brand: "black",
  },
  fonts: {
    responsive: {
      heading_1: "",
      heading_2: "",
      heading_3: "",
      heading_4: "",
      section_title: "",
    },
    global: {
      body_l: "",
      body_l_bold: "",
      body_l_caption: "",
      body_m: "",
      body_m_bold: "",
      body_m_caption: "",
      body_s: "",
      body_s_bold: "",
      body_s_caption: "",
    },
    specific: {
      button_text: "",
      header_navigation_text: "",
    },
  },
});
