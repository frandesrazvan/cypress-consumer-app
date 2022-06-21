/// <reference types = "cypress" />

context('Review page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrderUS({ url: Cypress.env('select_items_url') })
        cy.returnFirstItemUS({ url: Cypress.env('return_method_url') })
        cy.mailinReturnMethod({ url: Cypress.env('payout_method_url') })
        cy.originalPaymentMethod({ url: Cypress.env('review_url') })
    })

    it('C66 - Review Return', () => {
        // 1
        cy.get(':nth-child(3) > .ReviewReturnSection_action__geLQ8 > a')
            .click()
        cy.url()
            .should('eq', Cypress.env('payout_method_url'))

        // 2
        cy.get('.PayoutMethod_options__IQPzG > [tabindex="0"]')
            .click()
        cy.findByText(/Continue/)
            .should('be.enabled')

        // 3
        cy.findByText(/Continue/)
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))

        // 4
        cy.get('.ReviewReturn_changeLink__0SSkq')
            .click()
        cy.url()
            .should('eq', Cypress.env('select_items_url'))

        // 5 & 6 & 7 & 8
        cy.returnSecondItemUS({ url: Cypress.env('return_method_url') })

        // 9
        cy.findByText(/Continue/)
            .click()
        cy.url()
            .should('eq', Cypress.env('payout_method_url'))

        // 10
        cy.findByText(/Continue/)
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))
        
        // 11
        cy.findByText(/Submit Return/)
            .click()
        cy.url()
            .should('eq', Cypress.env('confirmation_url'))
    })
})