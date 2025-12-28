export class ContactPage {
  constructor(page) {
    this.page = page;
    this.name = page.locator('#name, input[name="name"]').first();
    this.email = page.locator('#email, input[name="email"]').first();
    this.message = page.locator('#message, textarea[name="message"]').first();
    this.submitBtn = page.locator('button[type="submit"]').first();
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async submitEmpty() {
    await this.submitBtn.click();
  }

  async submitValid(data) {
    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.message.fill(data.message);
    await this.submitBtn.click();
  }
}
