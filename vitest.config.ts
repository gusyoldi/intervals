import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {svelteTesting} from '@testing-library/svelte/vite'
 
export default defineConfig({
  resolve: {
    alias: [
      { find: /^zustand$/, replacement: resolve('./src/index.ts') },
      { find: /^zustand(.*)$/, replacement: resolve('./src/$1.ts') },
    ],
  },
  plugins: [react(), svelte(), svelteTesting()],
  test: {
    name: 'zustand',
    globals: true,
    environment: 'jsdom',
    dir: 'tests',
    reporters: 'basic',
    coverage: {
      reporter: ['text', 'json', 'html', 'text-summary'],
      reportsDirectory: './coverage/',
    },
  },
})
