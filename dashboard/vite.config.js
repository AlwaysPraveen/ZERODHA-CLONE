import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5174,
    proxy: {
      "/api": {
        target: "https://zerodha-clone-bpnu.onrender.com", // ✅ Deployed backend
        changeOrigin: true,
        secure: true,
      },
    },
    cors: true,
  },
});
