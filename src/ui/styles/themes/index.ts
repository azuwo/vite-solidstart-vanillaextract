import { CoreDarkTheme } from "./themes/core/dark.css";
import { CoreLightTheme } from "./themes/core/light.css";

export enum themeEnum {
  CORE_LIGHT = "CoreLightTheme",
  CORE_DARK = "CoreDarkTheme",
}

export type themeType =
    | "CoreLightTheme"
    | "CoreDarkTheme";


export const themesRecord: Record<themeType, string> = {
    CoreLightTheme: CoreLightTheme,
    CoreDarkTheme: CoreDarkTheme,
}
