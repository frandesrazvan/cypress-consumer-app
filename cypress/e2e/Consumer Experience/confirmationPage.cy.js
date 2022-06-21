/// <reference types = "cypress" />

context('Confirmation page', () => {
    beforeEach(() => {
        Cypress.config('defaultCommandTimeout', 7000);
    
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrder({ url: Cypress.env('locate_order_url') })
    })

    it('C39 - Confirmation message for "Dropoff" return method', () => {
        // precondition
        cy.returnFirstItem({ url: Cypress.env('return_method_url') })
        cy.dropoffReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})
        //

        // 1
        cy.contains('Submit Return')
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))
        cy.get('.ConfirmationLayout_title__82ETj')
            .should('contain', 'Success!')
        cy.get('canvas')
            .should('exist')
        cy.get('.ConfirmationLayout_content__1l4nq')
            .should('exist')
        cy.contains('Back to shopping')
            .should('exist')
        cy.contains('Submit another return')
            .should('exist')
    })

    it('C44 - Confirmation message without any return criteria being checked', () => {
        // preconditions
        cy.returnFirstItemNoCriteriaSelected({ url: Cypress.env('return_method_url') })
        cy.mailinReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})
        //

        // 1
        cy.contains('Submit Return')
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))
        cy.get('body')
            .should('contain', 'Your return request has been sent for review')
        
    }) 
    it('C45 - Confirmation message for "Mail In" return method', () => {
        // preconditions
        cy.returnFirstItem({ url: Cypress.env('return_method_url') })
        cy.mailinReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})
        //

        cy.contains('Submit Return')
            .click()
        cy.url()
            .should('eq', Cypress.env('review_url'))
        cy.get('.ConfirmationLayout_title__82ETj')
            .should('contain', 'Success!')
        cy.get('.ConfirmationLayout_hero__3v63t > a')
            .should('exist')
        cy.get('.ConfirmationLayout_content__1l4nq')
            .should('exist')
        cy.contains('Back to shopping')
            .should('exist')
        cy.contains('Submit another return')
            .should('exist')
    })
})