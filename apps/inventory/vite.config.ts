import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

const base = process.env.BASE_URL || '/inventory/'

export default defineConfig({
  base: base,
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp', '**/*.gif']
})
