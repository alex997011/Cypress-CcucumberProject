class NavigationPage {
    elements = {
        aboutUsModal: () => cy.get('#videoModal'),
        contactModal: () => cy.get('#exampleModal'),
        loginModal: () => cy.get('#logInModal'),
        signupModal: () => cy.get('#signInModal'),

        emailInput: () => cy.get('#recipient-email'),
        nameInput: () => cy.get('#recipient-name'),
        messageInput: () => cy.get('#message-text'),

        aboutUsModalLabel: () => cy.get('#videoModalLabel'),

        userNameInput: () => cy.get('#loginusername'),
        loginPasswordInput: () => cy.get('#loginpassword'),

        signUoUserNameInput: () => cy.get('#sign-username'),
        signUpPasswordInput: () => cy.get('#sign-password')
    }

    clickNavOption(name) {
        cy.fixture('navLinks').then(data => {
            const link = data.navLinks.find(l => l.name === name)
            if(link) {
                if(link.type === 'modal') {
                    cy.get(`a[data-target="${link.target}"]`).click()
                } else {
                    cy.get('#cartur').click()
                }
            }
        })
    }

    verifyNavigation(name) {
        cy.fixture('navLinks').then(data => {
            console.log('Fixture data:', data)
            const link = data.navLinks.find(l => l.name === name)
            console.log('Found link:', link)
            if(link) {
                if(link.type === 'modal') {
                    switch(name) {
                        case 'Contact':
                            this.elements.contactModal().should('be.visible')
                            this.elements.emailInput().should('be.visible')
                            this.elements.nameInput().should('be.visible')
                            this.elements.messageInput().should('be.visible')
                            break;
                        case 'About us':
                            this.elements.aboutUsModal().should('be.visible')
                            this.elements.aboutUsModalLabel().should("be.visible")
                            break;
                        case 'Log in':
                            this.elements.loginModal().should('be.visible')
                            this.elements.userNameInput().should("be.visible")
                            this.elements.loginPasswordInput().should("be.visible")
                            break;
                        case 'Sign up':
                            this.elements.signupModal().should('be.visible')
                            this.elements.signUoUserNameInput().should("be.visible")
                            this.elements.signUpPasswordInput().should("be.visible")
                            break;
                    }
                } else {
                    cy.url().should('include', link.url)
                }
            }
        })
    }
}

export default new NavigationPage()