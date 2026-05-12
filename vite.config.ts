import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// We remove the FS and Manus-specific plugins for the production build 
// because they rely on local folders that don't exist on Vercel.

export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin()],
  resolve: {
    alias: {
      // Since your Root Directory in Vercel is "client", 
      // "./src" is the correct relative path.
      "@": path.resolve(import.meta.dirname, "./src"),
      "@shared": path.resolve(import.meta.dirname, "../shared"),
      "@assets": path.resolve(import.meta.dirname, "../attached_assets"),
    },
  },
  // Vercel handles the root and build output automatically based on your dashboard settings
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
