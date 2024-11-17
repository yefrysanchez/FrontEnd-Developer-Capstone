import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // to use test() and expect() directly
    environment: 'jsdom', // to test React components
    setupFiles: ['./setupTests.ts'], // if needed for global setups
  },
});
