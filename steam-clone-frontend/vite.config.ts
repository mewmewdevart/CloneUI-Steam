import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@routers': '/src/routers',
      '@pages': '/src/pages',
      '@config': '/src/config.ts',
      '@utils': '/src/utils',
      '@wdyr': '/src/wdyr.ts',
      '@src': '/src',
    },
  },
});
