import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from "process";

const appName = process.env.npm_package_name;
const appMode = process.env.NODE_ENV; // Development or Production

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //uygulama yolu
  // @murselsen
  base: appMode === "development" ? "/" : `/${appName}/`,
  // @murselsen
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  }

})
