// playwright-dev-page.js
const { expect } = require('@playwright/test');

// Page object for /login screen

exports.LoginPage = class {
  constructor(page) {
    this.page = page;

    // locators
    this.loginInput = page.locator('[data-test="login-email"]');
    this.continueButton = page.locator('[data-test="validate-email"]');
    this.signupButton = page.locator('[data-test="create"]');
    this.alertMessage = page.locator('.alert-message');
  }

  // helpers
  async team() {
    return this.page.evaluate(() => window.Meteor.team());
  }

  async user() {
    return this.page.evaluate(() => window.Meteor.user());
  }

  // actions
  async login(email) {
    await expect(this.continueButton).toBeVisible();
    await expect(this.signupButton).toBeVisible();
    await expect(this.loginInput).toBeVisible();

    await this.loginInput.fill(email);

    await expect(this.continueButton).toBeEnabled();
    await this.continueButton.click();
  }

  async goto() {
    await this.page.goto('/login');
    await expect(this.page).toHaveURL(/.*login/);
  }
};
