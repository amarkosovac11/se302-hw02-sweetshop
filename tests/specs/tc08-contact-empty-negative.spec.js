import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('TC08 - Login Invalid (Negative)', () => {
  test('Invalid email/password shows validation messages', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.fill('notanemail', '');
    await login.submit();

    await expect(page.locator('text=/valid email address/i')).toBeVisible();
    await expect(page.locator('text=/valid password/i')).toBeVisible();
  });
});
