import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 import tailwindcss from '@tailwindcss/vite'

//import definido pela shadcn/ui

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // port: 5173
    port: 8080 //estou usando esta porta para permitir usar a API FasmaPay
  }
})