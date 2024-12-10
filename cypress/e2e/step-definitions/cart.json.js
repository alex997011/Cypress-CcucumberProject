import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pages/HomePage'
import ProductPage from '../../support/pages/ProductPage'
import CartPage from "../../support/pages/CartPage";


Given('I am on the home page', () => {
    cy.log('Verifying that we are on the homepage')
})


When('I click on {string}', (text) => {
    HomePage.clickCategoryOption(text)
})

Then('I should see the main categories container', () => {
    HomePage.verifyBodyCategories()
});


Then('I should see the phones categories container', () => {
    HomePage.verifyBodyPhones()
});

Then('I should see the laptops categories container', () => {
    HomePage.verifyBodyLaptops()
});

Then('I should see the monitors categories container', () => {
    HomePage.verifyBodyMonitors()
});

When('I do click in a random product', () => {
    HomePage.clickRandomProduct()
})

Then('Should redirect to me to the product page', () => {
    ProductPage.verifyProductPage()
});

When('I do click on the add to cart button', () => {
    ProductPage.clickAddToCart()
});

Then('the product is added correctly to the cart', () => {
    ProductPage.verifyProductAddedAlert()
});

Then('I should see my cart with the product', () => {
    CartPage.verifyProductInCart()
});

When('I do click on the place order button', () => {
    CartPage.clickPlaceOrderButton()
});

Then('I should see my place order form', () => {
    CartPage.verifyPlaceOrderForm()
});

When('I fill the form', () => {
    CartPage.fillTheForm()
});
And('I do click on the purchase button', () => {
    CartPage.clickPurchase()
});

Then('I should see the purchase confirmation', () => {
    CartPage.verifyPurchase()
});

When('I do click on delete item', () => {
   CartPage.clickDelete()
});

Then('I should see my cart empty', () => {
    CartPage.verifyCartEmpty()
});




