import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  protected async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  protected async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  protected async expectText(
    locator: Locator,
    expectedText: string
  ): Promise<void> {
    await expect(locator).toHaveText(expectedText);
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }
}