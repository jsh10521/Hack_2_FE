import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/movies': {
        target: 'https://thehotpotato.store/',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})