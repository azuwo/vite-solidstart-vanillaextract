import { createTheme } from "@vanilla-extract/css";
import { px2rem } from "~/ui/styles/utils";
import { ThemeC } from "../../contract.css";

export const CoreLightTheme = createTheme(ThemeC, {
  colors: {
    brand: "white",
    font: {
      global: {
        default: "",
        accent: "",
        subtle: "",
        disable: "",
        default_inverted: "",
        accent_inverted: "",
        subtle_inverted: "",
        disable_inverted: "",
      },
      link: {
        accent_default: "",
        accent_hover: "",
        neutral_default: "",
        neutral_hover: "",
      },
    },
    button: {
      primary: {
        text: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
        background: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
        stroke: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
      },
      secondary: {
        text: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
        background: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
        stroke: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
      },
      tertiary: {
        text: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
        background: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
        stroke: {
          default: "",
          hover: "",
          focus: "",
          disabled: "",
        },
      },
    },
    form: {
      textfield: {
        title: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        placeholder: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        texthelper: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        stroke: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        icon: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
      },
      dropdown: {
        title: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        placeholder: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        texthelper: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        stroke: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        icon: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
      },
      radio_button: {
        title: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        placeholder: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        texthelper: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        stroke: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
        icon: {
          default: "",
          focus: "",
          filled: "",
          disable: "",
          error: "",
        },
      },
    },
    background: {
      global_90: "#f2f2f2",
      global_80: "#d9d9d9",
      global_70: "#bfbfbf",
      global_60: "#949494",
      global_inverted: "#4d4d4d",
    },
    overlay: {
      global_80: "",
      global_60: "",
      global_40: "",
      global_20: "",
    },
    icons: {
      global_30: "",
      global_20: "",
      global_10: "",
      global_00: "",
      global_inverted_30: "",
      global_inverted_20: "",
      global_inverted_10: "",
      global_inverted_00: "",
    },
  },
  fonts: {
    responsive: {
      heading_1: `
        fontSize: ${px2rem(32)}
      `,
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
