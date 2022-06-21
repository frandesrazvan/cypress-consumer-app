/// <reference types = "cypress" />

const valid_order_number = 2785
const valid_email_address = "razvan@returnbear.com"
const our_shop_url = 'https://rb-basiks.myshopify.com/password'
const valid_different_emailAddress = 'aaaaqqqbbbggg@gmail.com'
const invalid_emailAddress = 'aaaaqqqbbbggg'
const valid_different_orderNumber = 25678
const invalid_orderNumber = '-123'

context('Locate Order Page', () => {
    describe('Form', () => {
        beforeEach(() => {
            cy.visit(Cypress.env('locate_order_url'))
            Cypress.config('defaultCommandTimeout', 8000);
        })

        it('C1 - Valid email and order number', () => {
            cy.locateOrder({ url: Cypress.env('select_items_url') })
        })
    
        it('C2 - Valid, different email and valid order number', () => {
            // 1
            cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
                .type(valid_different_emailAddress)
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })
                .should('be.disabled') 
            
            // 2
            cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
                .type(valid_order_number)
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })
                .should('be.enabled') 
    
            // 3
            cy.findByRole('button', { name: 'Start Return' })
                .click() 
            cy.get('.ErrorMessage_container__QCMqZ')
                .should('exist')
                .contains('We could not find a order which matches that information')
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
        })
    
        it('C3 - Invalid email and valid order number', () => {
            // 1
            cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
                .type(invalid_emailAddress) 
            cy.url().should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.disabled') 
            
            // 2
            cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
                .type(valid_order_number)
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.disabled') 
        })
    
        it('C4 - Valid email and valid, different order number', () => {
            // 1
            cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
                .type(valid_email_address) 
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.disabled') 
    
            // 2
            cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
                .type(valid_different_orderNumber)
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.enabled') 
    
            // 3
            cy.findByRole('button', { name: 'Start Return' })

                .click() 
            cy.get('.ErrorMessage_container__QCMqZ')
                .should('exist')
                .contains('We could not find a order which matches that information')
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
        })
    
        it('C6 - Valid, different email and valid, different order number', () => {
            // 1
            cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
                .type(valid_different_emailAddress) 
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.disabled') 
    
            // 2
            cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
                .type(valid_different_orderNumber)
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.enabled') 
    
            // 3
            cy.findByRole('button', { name: 'Start Return' })

                .click() 
            cy.get('.ErrorMessage_container__QCMqZ')
                .should('exist')
                .contains('We could not find an order which matches that information')
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
        }) 
    
        it('C8 - Invalid email and valid, different order number', () => {
            // 1
            cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
                .type(invalid_emailAddress) 
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.disabled') 
    
            // 2
            cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
                .type(valid_different_orderNumber)
            cy.url()
                .should('eq', Cypress.env('locate_order_url'))
            cy.findByRole('button', { name: 'Start Return' })

                .should('be.disabled') 
        })
        
        it('C9 - Click the info icon', () => {
            // 1
            cy.get('.TooltipButton_button__NZVop > .Icon_icon__-jALT')
                .click()
            cy.get('.TooltipButton_tooltip__Cqf86.TooltipButton_visible__cnPBq')
                .should('exist')
                .should('be.visible')
                .contains('Your order number can be found in the confirmation e-mail sent to you when you placed your order')
        })
    })
    
    // Footer
    // describe('Footer', () => {
    //     C12
    //     it.only('Click Visit our shop link', () => {
    //         cy.get(':nth-child(2) > :nth-child(1) > .StoreThemeLayout_footerLink__rLS1h')
    //             .invoke('removeAttr', 'target')
    //             .click()
    //         cy.url().should('include', our_shop_url)
    //     })
        
    //     Cypress doesn't allow multi tab automated tests
    // })
})

