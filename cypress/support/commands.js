// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('navigateToHomePage', () => {
    // Agregar los intercepts antes del visit
    cy.intercept('GET', 'https://api.demoblaze.com/entries').as('entries')
    cy.intercept('GET', 'https://hls.demoblaze.com/**', {}).as('hls')

    cy.visit('/')

    cy.get('.navbar-brand').should('be.visible')
})

Cypress.Commands.add('checkAPIHealth', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.demoblaze.com/entries',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})