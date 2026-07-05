import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://impression-backend.vercel.app',
        changeOrigin: true,
      },
      '/blog': {
        target: 'https://impression-backend.vercel.app',
        changeOrigin: true,
      },
    },
  },
})
