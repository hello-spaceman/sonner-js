import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/sonner.js',
      name: 'Sonner',
      fileName: (format) => `sonner.${format}.js`
    },
  }
})