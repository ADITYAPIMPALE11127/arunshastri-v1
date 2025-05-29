import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/razorpay': {
        target: 'http://localhost:3000', // Change this to your backend server URL and port
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/razorpay/, '/razorpay'),
      },
    },
  },
});
