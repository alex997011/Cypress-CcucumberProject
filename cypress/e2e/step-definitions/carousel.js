import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";



Given('I am on the home page', () => {
    cy.log('Verifying that we are on the homepage')
})

Then('The navbar brand should be visible', function() {
    cy.get('.navbar-brand').should('be.visible');
});

When('I click in the control next', function() {
    cy.get(".carousel-control-next").should("be.visible").click();
});

Then('The next element in the left should be visible', function() {
    cy.get(".carousel-item.active.carousel-item-left").should("be.visible");
});

When('I click in the control prev', function() {
    cy.get(".carousel-control-prev").should("be.visible").click();
});

Then('The next element in the right should be visible', function() {
    cy.get(".carousel-item.active.carousel-item-right").should("be.visible");
});

And ('The first slide should be visible', function() {
    cy.get('.carousel-item')
        .first()
        .should('have.class', 'active');
});

When('I wait for the automatic transition', function() {
    cy.wait(5000);
});

Then('The next slide should be automatically visible', function() {
    cy.get('.carousel-item')
        .first()
        .should('not.have.class', 'active');

    cy.get('.carousel-item.active')
        .should('be.visible');
});

