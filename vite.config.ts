import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Keep the wiki a static client build, compatible with Cloudflare Pages.
  plugins: [react()],
});
