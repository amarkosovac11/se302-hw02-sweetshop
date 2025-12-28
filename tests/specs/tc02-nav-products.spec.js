import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('TC02 - Navigation', () => {
  test('Navigate to Sweets page', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.goToSweets();

    await expect(page).toHaveURL(/\/sweets/i);
    await expect(page.getByRole('heading', { name: /browse sweets/i })).toBeVisible();
  });
});
