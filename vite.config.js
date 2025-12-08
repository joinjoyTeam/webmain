import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usingCustomDomain =
  process.env.CUSTOM_DOMAIN_HOST?.length ||
  process.env.GITHUB_PAGES === "true" ||
  process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";

const repoBase = process.env.VITE_REPO_BASE?.trim();
const normalizedRepoBase = repoBase
  ? repoBase.startsWith("/")
    ? repoBase.endsWith("/")
      ? repoBase
      : `${repoBase}/`
    : `/${repoBase}/`
  : null;

export default defineConfig({
  plugins: [react()],
  base: "/reallocalforglobal/",
  // GitHub Pages with a custom domain must be rooted at "/"
  base: usingCustomDomain || !normalizedRepoBase ? "/" : normalizedRepoBase,
  build: {
    outDir: "docs",
  },
});