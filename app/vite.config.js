import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      // Fixed names for the page bundle so the artifact can be republished without looking up hashes.
      output: {
        entryFileNames: 'assets/app.js',
        assetFileNames: (asset) => (asset.names?.[0]?.endsWith('.css') ? 'assets/app.css' : 'assets/[name]-[hash][extname]'),
      },
    },
  },
});
