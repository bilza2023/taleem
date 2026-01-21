import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["taleem-slides"],
    exclude: ["taleem-core"]
  },
  resolve: {
    dedupe: ["taleem-core"]
  }
});
