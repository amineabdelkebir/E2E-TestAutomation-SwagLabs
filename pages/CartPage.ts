import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{
  private readonly pageTitle: Locator;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page)

    this.pageTitle = page.locator('.title');
    this.checkoutButton = page.locator('#checkout');
  }

  async expectLoaded(): Promise<void> {
    await this.expectText(this.pageTitle,'Your Cart');
  }

  async verifyProduct(productName: string): Promise<void> {
    await this.expectVisible(
      this.page.locator('.cart_item').filter({
        hasText: productName
      })
    );
  }

  async checkout(): Promise<void> {
    await this.click(this.checkoutButton);
  }
}