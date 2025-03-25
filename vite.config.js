import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:3000", // Replace with your backend port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, "/user"), // Optional: adjust if needed
      },
    },
  },
});
