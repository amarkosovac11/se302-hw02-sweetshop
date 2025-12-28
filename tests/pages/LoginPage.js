export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel(/email address/i);
    this.password = page.getByLabel(/password/i);
    this.loginBtn = page.getByRole('button', { name: /^login$/i });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async fill(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
  }

  async submit() {
    await this.loginBtn.click();
  }
}
