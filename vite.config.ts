import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import mix from 'vite-plugin-mix'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        mix({
            handler: './src-api/api.js',
        }),
    ],
    server: {
        port: 3000
    }
})
