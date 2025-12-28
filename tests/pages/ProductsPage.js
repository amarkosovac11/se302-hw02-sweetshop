export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.getByRole('button', { name: /add to cart/i }).first();
    this.cartLink = page.getByRole('link', { name: /cart/i });
  }

  async addFirstProductToCart() {
    await this.addToCartBtn.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
