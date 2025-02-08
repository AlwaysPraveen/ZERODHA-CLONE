import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5174, // Ensure this is correct
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Your backend
        changeOrigin: true,
        secure: false,
      },
    },
    cors: true, // Allow requests from different origins
  },
});
