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
        filename: 'remoteEntry.js',
        exposes: {
          './authStore': './src/store/authStore',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^18.3.1',
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^18.3.1',
            eager: true,
          },
          '@okta/okta-react': {
            singleton: true,
            requiredVersion: '^6.9.0',
            eager: true,
          },
          '@okta/okta-auth-js': {
            singleton: true,
            requiredVersion: '^7.8.1',
            eager: true,
          },
          zustand: {
            singleton: true,
            requiredVersion: '^5.0.1',
            eager: true,
          },
        },
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
