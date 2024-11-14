// host/vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      federation({
        name: 'host',
        filename: 'authStore.js',
        remotes: {
          product: `${process.env.PRODUCT_APP_URL}/authStore.js`,
        },
        exposes: {
          './authStore': './src/store/authStore.js',
        },
        shared: ['react', 'react-dom', 'zustand'],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});
