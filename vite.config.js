import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: '/react2/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
