/// <reference types = "cypress" />

context('Review Page', () => {
    beforeEach(() => {
        Cypress.config('defaultCommandTimeout', 7000);
    
        cy.visit(Cypress.env('locate_order_url'))
        cy.wait(3000)
        cy.locateOrder({ url: Cypress.env('locate_order_url') })
        cy.returnFirstItem({ url: Cypress.env('return_method_url') })
    })

    it('C40 - Change return method from "Dropoff" to "Mail in"', () => {
        // preconditions
        cy.dropoffReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})
        //

        // 1
        cy.get(':nth-child(2) > .ReviewReturnSection_action__geLQ8 > a')
            .click()
        cy.url()
            .should('eq', Cypress.env('return_method_url'))

        // 2 & 3
        cy.mailinReturnMethod({ url: Cypress.env('payout_method_url')})

        // 4
        cy.findByText(/Continue/)
            .click()
        cy.get(':nth-child(2) > .ReviewReturnSection_content__IbyvQ')
            .invoke('text')
            .should('eq', 'Mail in via pre-paid shipping label')        
    })

    it('C41 - Change items for return', () => {
        // preconditions
        cy.dropoffReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})
        //

        // 1
        cy.get('.ReviewReturn_changeLink__0SSkq')
            .click()
        cy.url()
            .should('eq', Cypress.env('select_items_url'))

        // 2
        cy.returnSecondItem({ url: Cypress.env('return_method_url')})
        cy.dropoffReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})

        cy.get('.ReviewReturn_header__l8Nf5')
            .first()
            .invoke('text')
            .should('eq', 'Items (2)')
    })

    it('C42 - Click "Go Back" button', () => {
        // preconditions
        cy.dropoffReturnMethod({ url: Cypress.env('payout_method_url')})
        cy.originalPaymentMethod({ url: Cypress.env('review_url')})
        //

        // 1
        cy.get('[style="color: black; background-color: white;"]')
            .click()

        // 2
        cy.url()
            .should('eq', Cypress.env('payout_method_url'))
    })
})