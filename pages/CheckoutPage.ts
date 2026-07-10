import { Page , Locator} from "@playwright/test";
import { User } from '../models/User';
import { BasePage } from "./BasePage";


 
export  class CheckoutPage extends BasePage{
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly pageTitle: Locator; 

    constructor(page : Page){
        super(page)

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.pageTitle = page.locator('.title');
    }

          async expectLoaded(): Promise<void> {
         await this.expectText(this.pageTitle,'Checkout: Your Information');
       }

        async submitCustomerData(user : User): Promise<void>{
            await this.fill(this.firstNameInput,user.firstName)
            await this.fill(this.lastNameInput,user.lastName)
            await this.fill(this.postCodeInput,user.postalCode)
            await this.click(this.continueButton)    
        }


}