import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['json', 'html'],
      reportsDirectory: './coverage'
    },
    watch: false,
    dir: './tests',
  }
});