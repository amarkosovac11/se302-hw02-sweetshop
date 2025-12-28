import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('TC07 - Login Valid', () => {
  test('Valid-format login input removes validation errors', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    await expect(login.loginBtn).toBeVisible();

    await login.fill('test@user.com', 'qwerty');

    await expect(page.getByText('Please enter a valid email address.')).toBeHidden();
    await expect(page.getByText('Please enter a valid password.')).toBeHidden();

    await login.submit();
  });
});
