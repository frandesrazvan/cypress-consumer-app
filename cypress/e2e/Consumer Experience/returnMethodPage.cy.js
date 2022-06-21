/// <reference types = "cypress" />

context('Return Method page', () => {
    describe('Select a Return Method Container', () => {
        beforeEach(() => {
            Cypress.config('defaultCommandTimeout', 7000);
    
            cy.visit(Cypress.env('locate_order_url'))
            cy.wait(3000)
            cy.locateOrder({ email: Cypress.env('valid_email_address'), orderNumber: Cypress.env('valid_order_number'), url: Cypress.env('locate_order_url') })
            cy.returnFirstItem({ url: Cypress.env('return_method_url') })
        })

        it('C30 - Select "Dropoff items at a ReturnBear location" return method', () => {
            // 1
            cy.get('.ReturnMethod_option__Sgi8B')
                .should('have.class', 'SelectableItem_container__s-vYt ReturnMethod_option__Sgi8B SelectableItem_selected__FTxlZ SelectableItem_selectable__gqx1d')
            cy.contains('Continue')
                .should('be.enabled')

            // 2
            cy.contains('Continue')
                .click()
            cy.url()
                .should('eq', Cypress.env('payout_method_url'))
        })

        it('C32 - Select "Mail in items with a pre-paid shipping label" return method', () => {
            // 1
            cy.get('.ReturnMethod_mailInOption__OW1Pu')
                .click()
                .should('have.class', 'SelectableItem_container__s-vYt ReturnMethod_mailInOption__OW1Pu SelectableItem_selected__FTxlZ SelectableItem_selectable__gqx1d')
            cy.contains('Continue')
                .should('be.enabled')

            // 2
            cy.contains('Continue')
                .click()
            cy.url()
                .should('eq', Cypress.env('payout_method_url'))
        })

        it('C34 -  Change Dropoff point location', () => {
            // 1
            cy.get('.ReturnMethod_changeLocationButton__KKHsg')
                .click()
            cy.get('.Modal_modal__XspBU')
                .should('exist')
                .should('be.visible')
            cy.get('.DropoffLocationsModal_locationsList__n6-Gc')
                .should('exist')
                .should('be.visible')
            cy.get('.DropoffLocationsModal_map__UA6fE')
                .should('exist')
                .should('be.visible')
            cy.contains('Select location')
                .should('be.enabled')

            // 2
            cy.get('.DropoffLocationsModal_locationsList__n6-Gc > :nth-child(2)')
                .click()

            // 3
            cy.contains('Select location')
                .click()

            // 4
            cy.contains('Continue')
                .click()
            cy.url()
                .should('eq', Cypress.env('payout_method_url'))
        })

        it('C35 - Click "What are ReturnBear dropoff location" info icon', () => {
            cy.get('.TooltipButton_button__NZVop')
                .click()
            cy.get('.TooltipButton_tooltipContent__5Ulbo')
                .should('be.visible')
                .contains('ReturnBear is RB Luxury - QA’s return partner. There are 11 dropoff locations across Canada. Dropping off to ReturnBear is free, and has faster processing times, meaning you get your exchanges or refunds faster.')
        })

        it('C36 - Click "Go Back" button', () => {
            cy.get('[style="color: black; background-color: white;"]')
                .click()
            cy.url()
                .should('eq', Cypress.env('select_items_url'))
        })
    })
})