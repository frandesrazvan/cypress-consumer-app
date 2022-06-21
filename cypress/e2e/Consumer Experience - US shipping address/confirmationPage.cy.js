/// <reference types = "cypress" />

context('Confirmation page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrderUS({ url: Cypress.env('select_items_url') })
        cy.returnFirstItemUS({ url: Cypress.env('return_method_url') })
        cy.mailinReturnMethod({ url: Cypress.env('payout_method_url') })
        cy.originalPaymentMethod({ url: Cypress.env('review_url') })
    })

    it('C67 - Confirmation message for "Mail In" return method', () => {
        // 1
        cy.findByText(/Submit Return/)
            .click()
        cy.get('.ConfirmationLayout_title__82ETj')
            .should('contain', 'Success!')
        cy.findByText(/Download shipping label/)
            .should('exist')
        cy.get('.ConfirmationLayout_content__1l4nq')
            .should('exist')
        cy.findByText(/Back to shopping/)
            .should('exist')
        cy.findByText(/Submit another return/)
            .should('exist')
    })
})