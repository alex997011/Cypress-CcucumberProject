class ProductPage {
    elements = {
        productTitle: () => cy.get('.name'),
        productPrice: () => cy.get('.price-container'),
        productDescription: () => cy.get('#more-information'),
        addToCartButton: () => cy.get('.btn-success'),
    }


    verifyProductPage() {
        cy.url().should('include', 'prod.html')
        this.elements.productTitle().should('be.visible')
        this.elements.productPrice().should('be.visible')
        this.elements.productDescription().should('be.visible')
        this.elements.addToCartButton().should("be.visible")
    }

    clickAddToCart() {
        cy.intercept('POST', 'https://api.demoblaze.com/addtocart').as('addToCart')
        this.elements.addToCartButton().click()

        cy.wait('@addToCart').its('response.statusCode').should('eq', 200)
    }

    verifyProductAddedAlert() {
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Product added')
        })
    }


}

export default new ProductPage()