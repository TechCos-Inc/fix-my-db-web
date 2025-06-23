import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/fix-my-db-web/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    commonjsOptions: {
      include: [/node_modules/]
    },
    rollupOptions: {
      external: () => {
        // Don't externalize React for recharts
        return false;
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      },
    },
  },
})
