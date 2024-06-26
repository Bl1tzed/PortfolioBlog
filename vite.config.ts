import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import PrettyModuleClassnames from "vite-plugin-pretty-module-classnames";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), PrettyModuleClassnames()],
  build: {
    cssMinify: "lightningcss",
    cssCodeSplit: true,
  },
  preview: {
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/app/styles/index.scss";`,
      },
    },
  },
});
