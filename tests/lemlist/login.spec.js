const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./login.page');

// @ts-check
// eslint-disable-next-line import/no-extraneous-dependencies

test.describe('lemlist login', () => {
  test.use({ baseURL: 'https://app.lemlist.com' });
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(({ page }) => {
    page.context().clearCookies();
  });

  test('LOGIN_01: fails with bad email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // empty input
    await loginPage.goto();
    await loginPage.loginInput.fill('');
    await expect(loginPage.continueButton).toBeDisabled();

    // bad email
    await loginPage.login('bademail@email.com');
    await expect(loginPage.alertMessage).toContainText('no account exists');
  });

  test.skip('LOG_01: should allow login with correct email /password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // good input
    await loginPage.goto();
    await loginPage.login('dev.ci.lempire@gmail.com')

    // bad email
    await loginPage.login('-------')
    await expect(this.page).toHaveURL(/.*tea_.*/);
  });
});
