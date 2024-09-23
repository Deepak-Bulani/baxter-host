import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    modulePreload: false
  },
  plugins: [
    react(),
    federation({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        cms: "http://localhost:3001/assets/cmsEntry.js",
      },
      shared: ["react", "react-dom"]
    })
  ],
})
