import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://zerodha-clone-bpnu.onrender.com", // ✅ Deployed backend
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
