// HomePage.js
class HomePage {
    elements = {
        bodyCategories: () => cy.get('#tbodyid'),
        products: () => cy.get('.card-title .hrefch')

    }

    clickCategoryOption(text) {  // Nota: renombré este método
        cy.fixture('categories').then(data => {
            const link = data.categories.find(l => l.text === text)
            if (link.id === 'cat') {
                cy.get(`[id="${link.id}"]`).click()
            } else {
                cy.get(`[id="${link.id}"][onclick="byCat('${link.category}')"]`).click()
            }
        })
    }

    verifyBodyCategories() {
        this.elements.bodyCategories()
            .should('be.visible', { timeout: 5000 })
            .find('.col-lg-4')
            .should('have.length.greaterThan', 0)
    }

    verifyBodyPhones() {
        this.elements.bodyCategories()
            .should('be.visible', { timeout: 5000 })
            .find('.col-lg-4')
            .should('have.length.lessThan', 9)
    }

    verifyBodyLaptops() {
        this.elements.bodyCategories()
            .should('be.visible', { timeout: 5000 })
            .find('.col-lg-4')
            .should('have.length.lessThan', 7)
    }

    verifyBodyMonitors() {
        this.elements.bodyCategories()
            .should('be.visible', { timeout: 5000 })
            .find('.col-lg-4')
            .should('have.length.lessThan', 3)
    }


    clickRandomProduct() {
        this.elements.products()
            .then($products => {
                const randomIndex = Math.floor(Math.random() * $products.length)
                // Log para debug
                cy.log(`Clicking product at index ${randomIndex}`)
                cy.wrap($products[randomIndex]).click()
            })
    }

}

export default new HomePage()