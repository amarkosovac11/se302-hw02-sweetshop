import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SweetsPage } from '../pages/SweetsPage';
import { BasketPage } from '../pages/BasketPage';

test.describe('TC04 - Add to Basket', () => {
  test('Sweet is added to basket and total updates', async ({ page }) => {
    const home = new HomePage(page);
    const sweets = new SweetsPage(page);
    const basket = new BasketPage(page);

    await home.goto();
    await home.goToSweets();
    await sweets.addFirstSweetToBasket();

    await home.goToBasket();

    await expect(page.getByRole('heading', { name: 'Your Basket', exact: true })).toBeVisible();


    const totalLine = await basket.getTotalLine();
    expect(totalLine).not.toMatch(/£0\.00/);
  });
});
