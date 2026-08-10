import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  plugins: ["prettier-plugin-astro"],
  devToolbar: {
    enabled: false,
  },
});
