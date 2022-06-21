/// <reference types = "cypress" />

const valid_order_number = 2802
const valid_email_address = "razvan.frandes@roundassist.com"
const our_shop_url = 'https://rb-basiks.myshopify.com/password'
const valid_different_emailAddress = 'aaaaqqqbbbggg@gmail.com'
const invalid_emailAddress = 'aaaaqqqbbbggg'
const valid_different_orderNumber = 25678
const invalid_orderNumber = '-123asd'

context('Locate Order page - US shipping address', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('locate_order_url'))
        Cypress.config('defaultCommandTimeout', 8000);
    })

    it('C47 - Valid email and order number', () => {
        cy.locateOrderUS({ url: Cypress.env('select_items_url') })
    })

    it('C48 - Valid, different email and valid order number', () => {
        // 1
        cy.get('input[name="email"]')
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

    it('C49 - Invalid email and valid order number', () => {
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

    it('C50 - Valid email and valid, different order number', () => {
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

    it('C51 - Valid, different email and valid, different order number', () => {
        cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
            .type(valid_different_emailAddress) 
        cy.url()
            .should('eq', Cypress.env('locate_order_url'))
        cy.findByRole('button', { name: 'Start Return' })

            .should('be.disabled') 

        cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
            .type(valid_different_orderNumber)
        cy.url()
            .should('eq', Cypress.env('locate_order_url'))
        cy.findByRole('button', { name: 'Start Return' })

            .should('be.enabled') 

        cy.findByRole('button', { name: 'Start Return' })

            .click() 
        cy.get('.ErrorMessage_container__QCMqZ')
            .should('exist')
            .contains('We could not find an order which matches that information')
        cy.url()
            .should('eq', Cypress.env('locate_order_url'))
    }) 

    it('C52 - Invalid email and valid, different order number', () => {
        cy.get(':nth-child(1) > label > .TextInput_input__2ilHs')
            .type(invalid_emailAddress) 
        cy.url()
            .should('eq', Cypress.env('locate_order_url'))
        cy.findByRole('button', { name: 'Start Return' })

            .should('be.disabled') 

        cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
            .type(valid_different_orderNumber)
        cy.url()
            .should('eq', Cypress.env('locate_order_url'))
        cy.findByRole('button', { name: 'Start Return' })

            .should('be.disabled') 
    })
    
    it('C53 - Click the info icon', () => {
        cy.get('.TooltipButton_button__NZVop > .Icon_icon__-jALT')
            .click()
        cy.get('.TooltipButton_tooltip__Cqf86.TooltipButton_visible__cnPBq')
            .should('exist')
            .should('be.visible')
            .contains('Your order number can be found in the confirmation e-mail sent to you when you placed your order')
    })
})