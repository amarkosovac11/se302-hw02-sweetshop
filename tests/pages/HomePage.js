export class HomePage {
  constructor(page) {
    this.page = page;
    this.sweetsLink = page.getByRole('link', { name: /^Sweets$/i });
    this.loginLink = page.getByRole('link', { name: /^Login$/i });
    this.basketLink = page.getByRole('link', { name: /Basket/i });
  }

  async goto() {
    await this.page.goto('/');
  }

  async goToSweets() {
    await this.sweetsLink.click();
  }

  async goToLogin() {
    await this.loginLink.click();
  }

  async goToBasket() {
    await this.basketLink.click();
  }
}
