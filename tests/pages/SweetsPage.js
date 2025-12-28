export class SweetsPage {
  constructor(page) {
    this.page = page;

    this.firstAddToBasket = page.getByText('Add to Basket', { exact: true }).first();
  }

  async addFirstSweetToBasket() {
    await this.firstAddToBasket.click();
  }
}
