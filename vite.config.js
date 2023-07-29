import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // autoExternal()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'BarChart',
      formats: ['es'],
      fileName: (format) => `index.js`,
    },
    rollupOptions: {
      external: ['react', 'react-transition-group'],
      output: {
        globals: {
          react: 'React',
          "react-transition-group":"react-transition-group"
        }
      }
    },
  }
})
