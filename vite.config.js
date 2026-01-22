import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        builder: "arrow-keys.html",
        builder: "autoplay.html",
        builder: "background.html",
        builder: "builder.html",
        builder: "player.html",
        builder: "range.html"
      }
    }
  }
});
