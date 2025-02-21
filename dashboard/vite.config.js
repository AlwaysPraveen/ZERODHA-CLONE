import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", //  Ensures correct asset loading
  server: {
    open: true,
    port: 5174,
    proxy: {
      "/api": {
        target: "https://zerodha-clone-6rsc.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
    cors: true,
  },
  build: {
    outDir: "dist",
  },
});
