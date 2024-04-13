import { resolve } from 'path'
import { defineConfig } from 'vite';
import  sourcemaps from 'rollup-plugin-sourcemaps';
export default defineConfig({
    plugins: [sourcemaps()],
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `$injectedColor: orange;`
          }
        }
      }
    });