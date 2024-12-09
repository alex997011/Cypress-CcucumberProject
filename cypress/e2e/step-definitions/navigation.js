import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import NavigationPage from '../../support/pages/NavigationPage'

Given('I am on the home page', () => {
    cy.log('Verificando que estamos en la página principal')
})

When('I click on {string} option', (name) => {
    NavigationPage.clickNavOption(name)
})

Then('I should see cart content', () => {
    NavigationPage.verifyNavigation('Cart')
})

Then('I should see about modal content', () => {
    NavigationPage.verifyNavigation('About us')
})

Then('I should see contact form content', () => {
    NavigationPage.verifyNavigation('Contact')
})

Then('I should see login form content', () => {
    NavigationPage.verifyNavigation('Log in')
})

Then('I should see signup form content', () => {
    NavigationPage.verifyNavigation('Sign up')
})

