import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config for React + GitHub Pages (custom domain)
export default defineConfig({
  plugins: [react()],
  // Use root base for the custom domain krabi.joinjoytravel.com
  base: "/",
  build: {
    outDir: "docs", // GitHub Pages serves from /docs on the main branch
    emptyOutDir: true,
  },
});
