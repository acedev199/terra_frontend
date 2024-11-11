import { defineConfig } from 'electron-vite'
import { resolve } from 'path'
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
    publicDir: false,
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
    // resolve: {
    //     alias: {
    //         '@': path.resolve(__dirname, 'src'), // Set @ as an alias for the src folder
    //     },
    // },
    // resolve: {
    //     alias: [
    //         { find: '@', replacement: path.resolve(__dirname, 'src/') }, // Adjust for renderer
    //     ],
    // },
    main: {
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'electron/main/index.js')
                }
            }
        }
    },
    preload: {
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'electron/preload/index.js')
                }
            }
        }
    },
    // renderer: {
    //     plugins: [react()],
    // },
    renderer: {
        root: '.',
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html')
                }
            }
        }
    },
    server: {
        host: '0.0.0.0',
        open: true,
        port: 3001
    },
})