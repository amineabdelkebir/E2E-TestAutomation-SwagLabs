import { test } from '../fixtures/pages';
import { standardUser } from '../test-data/users';
import { products } from '../test-data/products';
import { LoginPage } from '../pages/LoginPage';

test('User can complete checkout for one product', async ({
  page,
  productsPage,
  cartPage,
  checkoutPage,
  checkoutOverviewPage,
  completePage,
}) => {
  //await page.goto('/inventory.html');
const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.login(standardUser);


  await productsPage.expectLoaded();
  await productsPage.addProductToCart(products.backpack);
  await productsPage.goToCart();

  await cartPage.expectLoaded();
  await cartPage.verifyProduct(products.backpack);
  await cartPage.checkout();

  await checkoutPage.expectLoaded();
  await checkoutPage.submitCustomerData(standardUser);

  await checkoutOverviewPage.verifyOrder(products.backpack);
  await checkoutOverviewPage.finishCheckout();

  await completePage.verifyOrderCompleted();
});