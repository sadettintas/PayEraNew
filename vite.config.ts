import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/PayEra/",
  plugins: [react()],
  server: {
    port: 2000 // Varsayılan port olarak 9090 kullanılacak
  }
})
