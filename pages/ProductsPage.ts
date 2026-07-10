import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  private readonly pageTitle: Locator;
  private readonly shoppingCartLink: Locator;
  

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.locator('.title');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async expectLoaded(): Promise<void> {
    await this.expectText(this.pageTitle,'Products');
  }

  async addProductToCart(productName: string): Promise<void> {
    const productCard = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });

    await this.click(productCard.getByRole('button', { name: 'Add to cart' }));
  }

  async goToCart(): Promise<void> {
    await this.click(this.shoppingCartLink);
  }
}