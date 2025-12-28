import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  use: {
    baseURL: 'https://sweetshop.netlify.app',
    headless: true
  }
});
