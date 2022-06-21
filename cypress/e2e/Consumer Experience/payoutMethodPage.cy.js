/// <reference types = "cypress" />

context('Payout Method Page', () => {
    beforeEach(() => {
        Cypress.config('defaultCommandTimeout', 7000);
    
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrder({ email: Cypress.env('valid_email_address'), orderNumber: Cypress.env('valid_order_number'), url: Cypress.env('locate_order_url') })
        cy.returnFirstItem({ url: Cypress.env('return_method_url') })
        cy.dropoffReturnMethod({ url: Cypress.env('payout_method_url')})
    })

    it('C37 - Store Credit', () => {
        // 1
        cy.contains('Continue')
            .should('be.enabled')
        cy.contains('Go Back')
            .should('be.enabled')

        // 2    
        cy.contains('Continue')
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))
    })

    it('C38 - Original Payment Method', () => {
        // 1
        cy.get('.PayoutMethod_options__IQPzG')
            .children()
            .first()
            .should('have.class', 'SelectableItem_container__s-vYt PayoutMethod_option__1jjHM SelectableItem_selected__FTxlZ SelectableItem_selectable__gqx1d')
        // 2
        cy.get('.PayoutMethod_options__IQPzG > [tabindex="0"]')
            .click()
        cy.contains('Continue')
            .should('be.enabled')
        cy.contains('Go Back')
            .should('be.enabled')

        // 3
        cy.contains('Continue')
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))
    })
})