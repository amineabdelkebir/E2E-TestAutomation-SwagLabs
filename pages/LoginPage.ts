import { Locator, Page } from '@playwright/test';
import { User } from '../models/User';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto(): Promise<void> {
    await this.navigate('/');
  }

  async login(user: User): Promise<void> {
    await this.fill(this.usernameInput, user.username);
    await this.fill(this.passwordInput, user.password);
    await this.click(this.loginButton);
  }
}