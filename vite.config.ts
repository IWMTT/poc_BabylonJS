import { defineConfig } from 'vite';
export default defineConfig({
  base:'/poc_BabylonJS/',
  server: {
    port: 18080,
  },
  build: {
    target: 'esnext'
  }
});

