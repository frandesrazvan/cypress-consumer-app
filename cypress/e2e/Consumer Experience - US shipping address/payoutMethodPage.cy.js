/// <reference types = "cypress" />

context('Payout Method page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrderUS({ url: Cypress.env('select_items_url') })
        cy.returnFirstItemUS({ url: Cypress.env('return_method_url') })
        cy.mailinReturnMethod({ url: Cypress.env('payout_method_url')})
    })

    it('C64 - Store Credit', () => {
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

    it('C65 - Original Payment Method', () => {
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