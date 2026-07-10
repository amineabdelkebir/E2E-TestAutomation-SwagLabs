import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { standardUser } from '../test-data/users';

setup('authenticate standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(standardUser);

  await page.context().storageState({
    path: 'auth/standard-user.json',
  });
});