import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "gptui",
  },
  plugins: [vue(), UnoCSS()],
});
