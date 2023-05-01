import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [solid(), vanillaExtractPlugin(), solidSvg()],
  ssr: {
    noExternal: ["@kobalte/core"],
  },
});
