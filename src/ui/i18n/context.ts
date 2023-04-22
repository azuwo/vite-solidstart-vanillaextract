import { createI18nContext } from "@solid-primitives/i18n";
import en from "./locales/en";
import es from "./locales/es";

const languages = {
  es,
  en,
};

export const LanguageContext = createI18nContext(languages, "es");
