import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ★ Simple Vite config สำหรับ React + GitHub Pages
export default defineConfig({
  plugins: [react()],

  // ตั้งค่า base path แบบธรรมดา
  // ถ้า host ที่ GitHub Pages ให้ใส่ /repo-name/
  // ถ้าใช้ custom domain เช่น krabi.joinjoytravel.com ให้ใส่ "/"
  base: "/",

  build: {
    outDir: "docs", // GitHub Pages ใช้โฟลเดอร์ docs
  },
});
