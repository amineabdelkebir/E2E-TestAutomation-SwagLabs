import { Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class CompletePage extends BasePage{
  
    private readonly confirmationMessage: Locator ;
    private readonly backhomeButton: Locator;

    constructor( page: Page){
        super(page);

        this.backhomeButton = page.locator('#back-to-products');
        this.confirmationMessage= page.locator('.complete-header');   
     }

     async verifyOrderCompleted(): Promise<void>{
        await this.expectText(this.confirmationMessage,'Thank you for your order!');
     }

   async backToProducts(): Promise<void> {
    await this.click(this.backhomeButton);
}

 }