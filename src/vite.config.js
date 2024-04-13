import { resolve } from 'path'
import { defineConfig } from 'vite';
import  sourcemaps from 'rollup-plugin-sourcemaps';
export default defineConfig({
    // build: {
    //     rollupOptions: {
    //         input: {
    //             main: 'src/index.html',
    //             // main: resolve(__dirname, 'src/index.html'),
    //         // nested: resolve(__dirname, 'src/index.html'),
    //       },
    //     //   output: {
    //     //     dir: 'dist',
    //     //     // entryFileNames: 'dist/index.html'
    //     //   }
    //     },
    // },
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