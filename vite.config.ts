// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // En DEV base="/", en BUILD base="/cv-hergro/"
  base: command === 'build' ? '/cv-hergro/' : '/',
  plugins: [react()],
  // opcional: abre la ruta correcta en preview
  preview: { open: '/cv-hergro/' }
}))
