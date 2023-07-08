import { style } from "@vanilla-extract/css";
import { ThemeC } from "~/ui/styles/themes/contract.css";
import { px2rem } from "~/ui/styles/utils";

const Wrapper = style([
  {
    display: "grid",
    gridTemplateColumns: "5% 1fr 10%",
    alignItems: "center",
    padding: `0 ${px2rem(16)}`,
    textAlign: "center",
    backgroundColor: ThemeC.colors.background.global_90,
  },
]);

const IconContainer = style([
  {
    display: "flex",
    gap: px2rem(16),
  },
]);

const Logo = style([
  {
    width: px2rem(32),
  },
]);

const LanguagePicker = style([
  {
    display: "flex",
    gap: px2rem(4),
  },
]);

const LanguagePickerContent = style([
  {
    backgroundColor: "teal",
    padding: px2rem(16),
    display: "flex",
    flexDirection: "column",
    gap: px2rem(8),
  },
]);

const LanguagePickerItem = style([
  {
    cursor: "pointer",
  },
]);

export default {
  IconContainer,
  Logo,
  Wrapper,
  LanguagePicker,
  LanguagePickerContent,
  LanguagePickerItem,
};
