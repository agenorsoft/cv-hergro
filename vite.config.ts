import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cv-hergro/' : '/',
  plugins: [react()],
  preview: { open: '/cv-hergro/' },
}))