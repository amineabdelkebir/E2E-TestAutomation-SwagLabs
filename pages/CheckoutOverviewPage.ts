import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  private readonly finishButton: Locator;
  private readonly inventoryName: Locator;

  constructor(page: Page) {
    super(page)

    this.finishButton = page.locator('#finish');
    this.inventoryName = page.locator('.inventory_item_name');
  }

  async verifyOrder(productName: string): Promise<void> {
    await this.expectText(this.inventoryName,productName);
  }

  async finishCheckout(): Promise<void> {
    await this.click(this.finishButton);
  }
}