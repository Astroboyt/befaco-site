import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    strictPort: !!process.env.PORT,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        modules: 'modules.html',
        product: 'product.html',
        power: 'power.html',
        resources: 'resources.html',
        community: 'community.html',
        shop: 'shop.html',
      }
    }
  }
})
