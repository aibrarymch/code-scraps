import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        'svg-animation': resolve(__dirname, 'src/svg-animation/index.html'),
        'svg-animation-2': resolve(__dirname, 'src/svg-animation/index2.html'),
      },
    },
  },
  publicDir: resolve(__dirname, 'public'),
})
