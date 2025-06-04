import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PayEraNew/', // Base path for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5555 // Varsayılan port olarak 5555 kullanılacak
  },
  preview: {
    port: 5555 // Preview portu
  }
})
