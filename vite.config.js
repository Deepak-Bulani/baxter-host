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
          remote_app: `http://localhost:3002/dist/assets/authStore.js`,
          patient: 'http://localhost:3001/dist/assets/cmsEntry.js',
          atomicLibrary: 'http://localhost:3006/dist/assets/atomicLibrary.js',
        },
        exposes: {
          './authStore': './src/store/authStore.js',
        },
        shared: ['react', 'react-dom', 'zustand', 'tailwindcss'],
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
