import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/movies': {
                target: 'https://thehotpotato.store',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
