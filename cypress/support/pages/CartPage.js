class CartPage {
    elements = {
        cartProducts: () => cy.get('#tbodyid tr.success'),
        cartTotal: () => cy.get('#totalp'),
        placeOrderButton: () => cy.get('.btn-success'),
        formPlaceOrder: () => cy.get('.modal-content'),
        orderTitle: () => cy.get('#orderModalLabel'),
        cartTotalOrderForm: () => cy.get('#totalm'),


        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        creditCarInput: () => cy.get('#card'),
        monthInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseButton: () => cy.get('button[onclick="purchaseOrder()"]'),


        confirmationMessage: () => cy.get('h2').contains("Thank you for your purchase!"),

        deleteButton: () => cy.contains('Delete')



    }

    verifyProductInCart() {
        this.elements.cartProducts()
            .should('be.visible', { timeout: 5000 })
            .and('have.length.greaterThan', 0)
        this.elements.cartTotal()
            .should("be.visible")
            .and('not.have.text', "0")
        this.elements.placeOrderButton()
            .should("be.visible")
    }

    clickPlaceOrderButton(){
        this.elements.placeOrderButton().click()
    }

    verifyPlaceOrderForm (){
        this.elements.formPlaceOrder()
            .should("be.visible")
        this.elements.orderTitle()
            .should("be.visible")
        this.elements.cartTotalOrderForm()
            .should("be.visible")
            .and("not.have.text","0")
    }

    fillTheForm (){
        cy.wait(1000)
        this.elements.nameInput()
            .should("be.visible")
            .type("Alejandro")
        this.elements.countryInput()
            .should("be.visible")
            .type("Ecuador")
        this.elements.cityInput()
            .should("be.visible")
            .type("Guayaquil")
        this.elements.creditCarInput()
            .should("be.visible")
            .type("484785484546")
        this.elements.monthInput()
            .should("be.visible")
            .type("June")
        this.elements.yearInput()
            .should("be.visible")
            .type("2028")
        this.elements.purchaseButton()
            .should("be.visible")

    }

    clickPurchase(){
        this.elements.purchaseButton().click()
    }

    verifyPurchase(){
        this.elements.confirmationMessage().should("be.visible")
    }

    clickDelete(){

        cy.intercept('POST', '**/deleteitem').as('deleteCart')

        this.elements.deleteButton().click()
        cy.wait('@deleteCart')

    }

    verifyCartEmpty(){
        this.elements.cartProducts()
            .should('not.exist')
    }

}

export default new CartPage()