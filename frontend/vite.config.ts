import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'frontend/dist',
    rollupOptions: {
      input: {
        main: './frontend/index.html',
      },
    },
  },
  base: './',
});
