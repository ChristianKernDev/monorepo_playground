import path from 'node:path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [viteTsconfigPaths(), checker({ typescript: false })],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            'common': path.join(__dirname, '../common/src'),
        },
    },
});
