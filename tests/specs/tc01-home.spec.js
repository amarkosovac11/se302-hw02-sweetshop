import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('TC01 - Homepage Load', () => {
  test('Homepage loads successfully', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await expect(page.getByRole('navigation')).toBeVisible();
  });
});
