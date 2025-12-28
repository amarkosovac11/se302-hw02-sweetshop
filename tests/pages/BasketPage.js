export class BasketPage {
  constructor(page) {
    this.page = page;
    this.totalText = page.locator('text=Total (GBP)').first();
  }

  async getTotalLine() {
    return await this.totalText.textContent();
  }
}
