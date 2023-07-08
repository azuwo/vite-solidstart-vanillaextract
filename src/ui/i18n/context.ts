import { createI18nContext } from "@solid-primitives/i18n";
import en from "./locales/en";
import es from "./locales/es";

const languages = {
  es,
  en,
} as const;

export type LangTypes = keyof typeof languages;

export const LangRecord: Record<LangTypes, string> = {
  en: "en",
  es: "es",
};

export const LanguageContext = createI18nContext(languages, LangRecord.es);
