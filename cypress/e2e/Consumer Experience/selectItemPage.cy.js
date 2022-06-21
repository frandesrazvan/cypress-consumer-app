/// <reference types = "cypress" />

context('Select Item Page', () => {
    describe('Eligible Items Container', () => {
        beforeEach(() => {
            Cypress.config('defaultCommandTimeout', 7000);
    
            cy.visit(Cypress.env('locate_order_url'))
            cy.wait(3000)
            cy.locateOrder({ url: Cypress.env('locate_order_url') })
        })

        it('C20 - Return Item - all return item criteria selected', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('Better price found')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
            
            // 4
            cy.get('.ToggleTokens_token__eXaJh')
                .click()
            cy.get('.ProductReturnCard_returnInfo__-r2IA')
                .contains('This item can be returned for store credit or a refund to the original payment method.')
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .click()
            cy.get('.AdditionalCommentsInput_textarea__UdUtg')
                .should('exist')
                .should('be.visible')
    
            // 6
            cy.get('.AdditionalCommentsInput_textarea__UdUtg')
                .type('I found the top at 50% discount at another store.')
    
            // 7
            cy.contains('Continue')
                .click()
            cy.get('.Modal_container__143pE')
                .should('be.visible')
                .should('exist')
            cy.get('.Modal_title__KXL3u')
                .contains('Are these items O.K. to return?')
    
            // 8
            cy.get('.StorePolicyChecklistModal_checkboxes__Wwbo0 > :nth-child(1) > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
                .click()
    
            // 9
            cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
                .click()
            cy.url()
                .should('eq', Cypress.env('return_method_url'))
        })
    
        it('C21 - Exchange Item - all return items criteria selected', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('Better price found')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
    
            // 4
            cy.contains('Exchange for a different variation')
                .should('exist')
                .should('be.visible')
            cy.contains('Exchanged items are treated as final sale')
                .should('exist')
                .should('be.visible')
            cy.get('.ProductReturnCard_exchangeOptions__mLfoI')
                .should('exist')
                .should('be.visible')
                .find('label')
                .should('exist')

            // 5
            cy.contains('What color would you like?*')
                .click()

            // 6
            cy.get('#downshift-16-item-0')
                .click()

            // 7
            cy.contains('What size would you like?*')
                .click()
            
            // 8
            cy.get('#downshift-17-item-0')
                .click()

            // 9
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .click()
            cy.get('.AdditionalCommentsInput_textarea__UdUtg')
                .should('exist')
                .should('be.visible')

            // 10
            cy.get('.AdditionalCommentsInput_textarea__UdUtg')
                .type('What size is SILK?')

                cy.contains('Continue')
                .click()
            cy.get('.Modal_container__143pE')
                .should('be.visible')
                .should('exist')
            cy.get('.Modal_title__KXL3u')
                .contains('Are these items O.K. to return?')
    
            // 11
            cy.get('.StorePolicyChecklistModal_checkboxes__Wwbo0 > :nth-child(1) > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
                .click()
    
            // 12
            cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
                .click()
            cy.url()
                .should('eq', Cypress.env('return_method_url'))
        })

        it('C22 - Return Item - select only "Item is unworn" return criteria', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('No longer needed')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
            
            // 4
            cy.get('.ToggleTokens_token__eXaJh')
                .click()
            cy.get('.ProductReturnCard_returnInfo__-r2IA')
                .contains('This item can be returned for store credit or a refund to the original payment method.')
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.contains('Continue')
                .click()
            cy.get('.Modal_container__143pE')
                .should('be.visible')
                .should('exist')
            cy.get('.Modal_title__KXL3u')
                .contains('Are these items O.K. to return?')
    
            // 6
            cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
                .click()
    
            // 7
            cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
                .click()
            cy.url()
                .should('eq', Cypress.env('return_method_url'))
        })

        it('C23 - Return Item - select only "Item has tags" return criteria', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('No longer needed')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
            
            // 4
            cy.get('.ToggleTokens_token__eXaJh')
                .click()
            cy.get('.ProductReturnCard_returnInfo__-r2IA')
                .contains('This item can be returned for store credit or a refund to the original payment method.')
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.contains('Continue')
                .click()
            cy.get('.Modal_container__143pE')
                .should('be.visible')
                .should('exist')
            cy.get('.Modal_title__KXL3u')
                .contains('Are these items O.K. to return?')
    
            // 6
            cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
                .click()
    
            // 7
            cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
                .click()
            cy.url()
                .should('eq', Cypress.env('return_method_url'))
        })

        it('C24 - Return Item - no return criteria selected', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                    .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('No longer needed')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
            
            // 4
            cy.get('.ToggleTokens_token__eXaJh')
                .click()
            cy.get('.ProductReturnCard_returnInfo__-r2IA')
                .contains('This item can be returned for store credit or a refund to the original payment method.')
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.contains('Continue')
                .click()
            cy.get('.Modal_container__143pE')
                .should('be.visible')
                .should('exist')
            cy.get('.Modal_title__KXL3u')
                .contains('Are these items O.K. to return?')
    
            // 6
            cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
                .click()
            cy.url()
                .should('eq', Cypress.env('return_method_url'))
        })

        it('C25 - Return/Exchange Item - No Item selected for return/exchange', () => {
            // 1
            cy.contains('Continue')
                .should('be.disabled')
        })

        it('C26 - Return/Exchange item - at least one item selected, "Why are you returning this item" question unanswered', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                .should('contain', "Why are you returning this item?")

            // 2
            cy.contains('Continue')
                .should('be.disabled')
        })

        it('C27 - Return Item - Return button is clicked,  no comment added', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('No longer needed')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
            
            // 4
            cy.get('.ToggleTokens_token__eXaJh')
                .click()
            cy.get('.ProductReturnCard_returnInfo__-r2IA')
                .contains('This item can be returned for store credit or a refund to the original payment method.')
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.contains('Continue')
                .click()
            cy.get('.Modal_container__143pE')
                .should('be.visible')
                .should('exist')
            cy.get('.Modal_title__KXL3u')
                .contains('Are these items O.K. to return?')
    
            // 6
            cy.get('.StorePolicyChecklistModal_checkboxes__Wwbo0 > :nth-child(1) > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
                .click()
    
            // 7
            cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
                .click()
            cy.url()
                .should('eq', Cypress.env('return_method_url'))
        })

        it('C31 - Return Item - Click "Go Back" button', () => {
            // 1
            cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
                .click()
            cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
                .should('exist')
                .find('label')
                    .should('contain', "Why are you returning this item?")
    
            // 2
            cy.get('.Select_buttonText__pxC91')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 3
            cy.contains('Better price found')
                .click()
            cy.get('.ToggleTokens_container__DPdXv')
                .should('exist')
                .should('be.visible')
            
            // 4
            cy.get('.ToggleTokens_token__eXaJh')
                .click()
            cy.get('.ProductReturnCard_returnInfo__-r2IA')
                .contains('This item can be returned for store credit or a refund to the original payment method.')
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.get('.AdditionalCommentsInput_button__GtGUB')
                .click()
            cy.get('.AdditionalCommentsInput_textarea__UdUtg')
                .should('exist')
                .should('be.visible')
    
            // 6
            cy.get('.AdditionalCommentsInput_textarea__UdUtg')
                .type('I found the top at 50% discount at another store.')

            // 7
            cy.get('[style="color: black; background-color: white;"]')
                .click()
            cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
                .should('have.value', Cypress.env('valid_email_address'))
        })
    })
})

