import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';

export default defineConfig(async () => {
  const tsconfigPaths = await import('vite-tsconfig-paths').then(mod => mod.default);
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      babel({
        babelHelpers: 'runtime',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**'
      })
    ],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/MetricsDashboard.css";`
        }
      }
    }
  };
});



