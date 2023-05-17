import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 5000
  },
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: 'public',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[ext]/[name][extname]',
        chunkFileNames: 'assets/[chunks]/[name].[hash].js',
        entryFileNames: 'assets/js/entry-server.js'
      }
    }
  }
});
