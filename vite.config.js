import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Para GitHub Pages, use '/nome-do-repositorio/' se não for o repositório principal
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  optimizeDeps: {
    exclude: ['fsevents']
  }
})