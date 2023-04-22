// @refresh reload
import { I18nContext } from "@solid-primitives/i18n";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { CounterProvider } from "./ui/components/Counter/counter_context";
import { ThemeProvider } from "./ui/components/contexts/theme_context/theme_context";
import { LanguageContext } from "./ui/i18n/context";
import "./ui/styles/globals.css";
import { themesRecord } from "./ui/styles/themes";

export default function Root() {
  return (
    <Html>
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <I18nContext.Provider value={LanguageContext}>
        <ThemeProvider theme={themesRecord.CoreLightTheme}>
          <Body>
            <Suspense>
              <ErrorBoundary>
                <CounterProvider count={25}>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </CounterProvider>
              </ErrorBoundary>
            </Suspense>
            <Scripts />
          </Body>
        </ThemeProvider>
      </I18nContext.Provider>
    </Html>
  );
}
