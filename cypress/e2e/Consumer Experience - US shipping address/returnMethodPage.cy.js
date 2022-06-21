/// <reference types = "cypress" />

context('Return Method page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrderUS({ url: Cypress.env('select_items_url') })
        cy.returnFirstItemUS({ url: Cypress.env('return_method_url') })
    })

    it('C63 - Mail in items with a pre-paid shipping label', () => {
        // 1
        cy.get('.SelectableItem_container__s-vYt')
            .should('have.class', 'SelectableItem_container__s-vYt ReturnMethod_mailInOption__OW1Pu SelectableItem_selected__FTxlZ SelectableItem_selectable__gqx1d')
        cy.findByText(/Continue/)
            .should('be.enabled')

        // 2
        cy.findByText(/Continue/)
            .click()
        cy.url(Cypress.env('payout_method_url'))
    })
})