import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        primary: "#3A5F0B",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
});
