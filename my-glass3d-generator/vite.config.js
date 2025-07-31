import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // path modulini import qiling

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // "@" aliasini sozlash
    },
  },
})