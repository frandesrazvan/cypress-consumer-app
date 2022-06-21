// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('locateOrder', (user) => {
    Cypress.config('defaultCommandTimeout', 7000);

    // 1
    cy.get('input[name="email"]')
        .type("razvan@returnbear.com")
    cy.findByRole('button', { name: 'Start Return' })

        .should('be.disabled') 

    // 2
    cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
        .type(2845)
    cy.findByRole('button', { name: 'Start Return' })

        .should('be.enabled')
         
    cy.findByText(/Start Return/)
        .click()
    cy.wait(2000)
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('locateOrderUS', (user) => {
    Cypress.config('defaultCommandTimeout', 7000);

    // 1
    cy.get('input[name="email"]')
        .type("razvan.frandes@roundassist.com")
    cy.findByRole('button', { name: 'Start Return' })

        .should('be.disabled') 

    // 2
    cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
        .type(2802)
    cy.findByRole('button', { name: 'Start Return' })

        .should('be.enabled')
         
    cy.findByText(/Start Return/)
        .click()
    cy.wait(2000)
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('returnFirstItem', (user) => {
    cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
        .click()
    cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
        .should('exist')
        .find('label')
        .should('contain', "Why are you returning this item?")

    cy.get('.Select_buttonText__pxC91')
        .click()
    cy.get('[aria-expanded="true"]')
        .should('exist')

    cy.contains('Better price found')
        .click()
    cy.get('.ToggleTokens_container__DPdXv')
        .should('exist')
        .should('be.visible')
    
    cy.get('.ToggleTokens_token__eXaJh')
        .click()
    cy.get('.ProductReturnCard_returnInfo__-r2IA')
        .contains('This item can be returned for store credit or a refund to the original payment method.')
    cy.get('.AdditionalCommentsInput_button__GtGUB')
        .should('exist')
        .should('be.visible')

    cy.get('.AdditionalCommentsInput_button__GtGUB')
        .click()
    cy.get('.AdditionalCommentsInput_textarea__UdUtg')
        .should('exist')
        .should('be.visible')

    cy.get('.AdditionalCommentsInput_textarea__UdUtg')
        .type('I found the top at 50% discount at another store.')

    cy.contains('Continue')
        .click()
    cy.get('.Modal_container__143pE')
        .should('be.visible')
        .should('exist')
    cy.get('.Modal_title__KXL3u')
        .contains('Are these items O.K. to return?')

    cy.get('.StorePolicyChecklistModal_checkboxes__Wwbo0 > :nth-child(1) > .Checkbox_hitArea__kGonz')
        .click()
    cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
        .click()

    cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
        .click()
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('returnFirstItemNoCriteriaSelected', (user) => {
    cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
        .click()
    cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
        .should('exist')
        .find('label')
        .should('contain', "Why are you returning this item?")

    cy.get('.Select_buttonText__pxC91')
        .click()
    cy.get('[aria-expanded="true"]')
        .should('exist')

    cy.contains('Better price found')
        .click()
    cy.get('.ToggleTokens_container__DPdXv')
        .should('exist')
        .should('be.visible')
    
    cy.get('.ToggleTokens_token__eXaJh')
        .click()
    cy.get('.ProductReturnCard_returnInfo__-r2IA')
        .contains('This item can be returned for store credit or a refund to the original payment method.')
    cy.get('.AdditionalCommentsInput_button__GtGUB')
        .should('exist')
        .should('be.visible')

    cy.get('.AdditionalCommentsInput_button__GtGUB')
        .click()
    cy.get('.AdditionalCommentsInput_textarea__UdUtg')
        .should('exist')
        .should('be.visible')

    cy.get('.AdditionalCommentsInput_textarea__UdUtg')
        .type('I found the top at 50% discount at another store.')

    cy.contains('Continue')
        .click()
    cy.get('.Modal_container__143pE')
        .should('be.visible')
        .should('exist')
    cy.get('.Modal_title__KXL3u')
        .contains('Are these items O.K. to return?')

    cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
        .click()
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('returnFirstItemUS', (user) => {
    cy.get(':nth-child(2) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
            .click()
        cy.get(':nth-child(2) > .ProductReturnCard_returnReason__P50KX')
            .should('exist')
            .find('label')
            .should('contain', "Why are you returning this item?")

        cy.get('.Select_buttonText__pxC91')
            .click()
        cy.get('[aria-expanded="true"]')
            .should('exist')

        cy.contains('Better price found')
            .click()
        cy.get('.ToggleTokens_container__DPdXv')
            .should('exist')
            .should('be.visible')
        cy.get('.ProductReturnCard_returnInfo__-r2IA')
            .contains('This item can be returned for store credit or a refund to the original payment method.')
        cy.get('.AdditionalCommentsInput_button__GtGUB')
            .should('exist')
            .should('be.visible')

        cy.get('.AdditionalCommentsInput_button__GtGUB')
            .click()
        cy.get('.AdditionalCommentsInput_textarea__UdUtg')
            .should('exist')
            .should('be.visible')

        cy.get('.AdditionalCommentsInput_textarea__UdUtg')
            .type('I found the top at 50% discount at another store.')

        cy.contains('Continue')
            .click()
        cy.get('.Modal_container__143pE')
            .should('be.visible')
            .should('exist')
        cy.get('.Modal_title__KXL3u')
            .contains('Are these items O.K. to return?')

        cy.get('.StorePolicyChecklistModal_checkboxes__Wwbo0 > :nth-child(1) > .Checkbox_hitArea__kGonz')
            .click()
        cy.get(':nth-child(2) > .Checkbox_hitArea__kGonz')
            .click()

        cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
            .click()
        cy.url()
            .should('eq', user.url)
})

Cypress.Commands.add('returnSecondItemUS', (user) => {
    cy.get(':nth-child(3) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
            .click()
    cy.get(':nth-child(3) > .ProductReturnCard_returnReason__P50KX')
        .should('exist')
        .find('label').should('contain', "Why are you returning this item?")

    cy.get('.Select_buttonText__pxC91')
        .eq(1)
        .click()
    cy.get('[aria-expanded="true"]')
        .should('exist')

    cy.contains('Does not fit')
        .click()
    cy.get('.ToggleTokens_container__DPdXv')
        .should('exist')
        .should('be.visible')

    cy.contains('Continue')
        .click()
    cy.get('.Modal_container__143pE')
        .should('be.visible')
        .should('exist')
    cy.get('.Modal_title__KXL3u')
        .contains('Are these items O.K. to return?')

    cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
        .click()
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('returnSecondItem', (user) => {
    cy.get(':nth-child(3) > .ProductReturnCard_checkbox__b9tZ0 > .Checkbox_container__P5Ei2 > .Checkbox_hitArea__kGonz')
            .click()
    cy.get(':nth-child(3) > .ProductReturnCard_returnReason__P50KX')
        .should('exist')
        .find('label')
        .should('contain', "Why are you returning this item?")

    cy.get('.Select_buttonText__pxC91')
        .eq(1)
        .click()
    cy.get('[aria-expanded="true"]')
        .should('exist')

    cy.contains('Does not fit')
        .click()
    cy.get('.ToggleTokens_container__DPdXv')
        .should('exist')
        .should('be.visible')

    cy.get(':nth-child(3) > .ProductReturnCard_resolutionArea__KVxzE > .ToggleTokens_container__DPdXv > .ToggleTokens_token__eXaJh')
        .click()

    cy.contains('Continue')
        .click()
    cy.get('.Modal_container__143pE')
        .should('be.visible')
        .should('exist')
    cy.get('.Modal_title__KXL3u')
        .contains('Are these items O.K. to return?')

    cy.get('.Modal_footer__mow9m')
            .findByRole('button', { name: 'Continue' })
        .click()
    cy.url()
        .should('eq', user.url)
})

    Cypress.Commands.add('dropoffReturnMethod', (user) => {
        cy.get('.ReturnMethod_option__Sgi8B')
            .should('have.class', 'SelectableItem_container__s-vYt ReturnMethod_option__Sgi8B SelectableItem_selected__FTxlZ SelectableItem_selectable__gqx1d')
        cy.contains('Continue')
            .should('be.enabled')

        cy.wait(2000)

        cy.contains('Continue')
            .click()
        cy.url()
            .should('eq', user.url)
    })

    Cypress.Commands.add('mailinReturnMethod', (user) => {
        cy.get('.ReturnMethod_mailInOption__OW1Pu')
            .click()
            .should('have.class', 'SelectableItem_container__s-vYt ReturnMethod_mailInOption__OW1Pu SelectableItem_selected__FTxlZ SelectableItem_selectable__gqx1d')
        cy.contains('Continue')
            .should('be.enabled')

        cy.contains('Continue')
            .click()
        cy.url()
            .should('eq', user.url)
    })

Cypress.Commands.add('storeCreditPayoutMethod', (user) => {
    cy.contains('Continue')
        .should('be.enabled')
    cy.contains('Go Back')
        .should('be.enabled')
 
    cy.contains('Continue')
        .click()
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('originalPaymentMethod', (user) => {
    cy.get('.PayoutMethod_options__IQPzG > [tabindex="0"]')
        .children()
        .first()
    cy.get('.PayoutMethod_options__IQPzG > [tabindex="0"]')
        .click()
    cy.contains('Continue')
        .should('be.enabled')
    cy.contains('Go Back')
        .should('be.enabled')

    cy.contains('Continue')
        .click()
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('adminLogin', (user) => {
    // 2
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
        .type('razvan@returnbear.com')
    cy.findByRole('button', { name: 'Log In' })
        .should('be.disabled')

    // 3
    cy.get('input[type="password"]')
        .type('8BpL0^0mz$')
    cy.findByRole('button', { name: 'Log In' })
        .should('be.enabled')

    // 4
    cy.findByRole('button', { name: 'Log In' })
        .click()
    cy.url()
        .should('eq', user.url)
})

Cypress.Commands.add('consumerPortalThemeFunctionalities', (user) => {
    // preconditions
    cy.visit(Cypress.env('admin_url'))
    cy.adminLogin({ url: Cypress.env('return_case_url')} )
    //

     // 1
    cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
        .click()
    cy.findByText(/RB Luxury - QA/)
        .click()

    // 2
    cy.contains('Settings')
        .click()
    cy.url()
        .should('eq', Cypress.env('settings_url'))
    
    // 3
    cy.contains('Customize consumer portal')
        .click()
    cy.url()
        .should('eq', Cypress.env('settings_consumer_portal_url'))

    // 4
    cy.get('.MuiGrid-root.MuiGrid-container:nth-child(1) > div > div > div > div > button')
        .first()
        .click()
    cy.get('.uploadcare--panel.uploadcare--dialog__panel')
        .should('exist')
        .should('be.visible')
    cy.contains('Choose a local file')
        .should('exist')
        .should('be.visible')

    // 5
    cy.get('.uploadcare--menu.uploadcare--panel__menu > div > :nth-child(4)')
        .click()
    cy.get('.uploadcare--input')
        .should('exist')
        .should('be.visible')

    // 6
    cy.get('.uploadcare--input')
        .type(user.first_image)

    // 7
    cy.get('.uploadcare--form > .uploadcare--button')
        .click()
    cy.get('.uploadcare--tab__header > .uploadcare--text')
        .should('contain', 'Add this image?')
    cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
        .should('exist')

    // 8
    cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
        .click()
    cy.get('.uploadcare--panel.uploadcare--dialog__panel')
        .should('not.exist')
    cy.get('.uploadcare--widget__button.uploadcare--widget__button_type_remove') 
        .first()
        .should('exist')
        .should('contain', 'Remove')

    // 9
    cy.get('.MuiGrid-root.MuiGrid-container:nth-child(3) > div > div > div > div > button')
        .first()
        .click()
    cy.get('.uploadcare--panel.uploadcare--dialog__panel')
        .should('exist')
        .should('be.visible')
    cy.contains('Choose a local file')
        .should('exist')
        .should('be.visible')

    // 10
    cy.get('.uploadcare--menu.uploadcare--panel__menu > div > :nth-child(4)')
        .click()
    cy.get('.uploadcare--input')
        .should('exist')
        .should('be.visible')

    // 11
    cy.get('.uploadcare--input')
        .type(user.second_image)

    // 12
    cy.get('.uploadcare--form > .uploadcare--button')
        .click()
    cy.get('.uploadcare--tab__header > .uploadcare--text')
        .should('contain', 'Add this image?')
    cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
        .should('exist')

    // 13
    cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
        .click()
    cy.get('.uploadcare--panel.uploadcare--dialog__panel')
        .should('not.exist')
    cy.get('.uploadcare--widget__button.uploadcare--widget__button_type_remove') 
        .eq(1)
        .should('exist')
        .should('contain', 'Remove')

    // 14
    cy.get('.MuiGrid-root.MuiGrid-container:nth-child(2) > div > div > div > div > button')
        .first()
        .click()
    cy.get('.uploadcare--panel.uploadcare--dialog__panel')
        .should('exist')
        .should('be.visible')
    cy.contains('Choose a local file')
        .should('exist')
        .should('be.visible')

    // 15
    cy.get('.uploadcare--menu.uploadcare--panel__menu > div > :nth-child(4)')
        .click()
    cy.get('.uploadcare--input')
        .should('exist')
        .should('be.visible')

    // 16
    cy.get('.uploadcare--input')
        .type(user.third_image)

    // 17
    cy.get('.uploadcare--form > .uploadcare--button')
        .click()
    cy.wait(2000)
    cy.get('.uploadcare--tab__header > .uploadcare--text')
        .should('contain', 'Add this image?')
    cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
        .should('exist')

    // 18
    cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
        .click()
    cy.get('.uploadcare--panel.uploadcare--dialog__panel')
        .should('not.exist')
    cy.get('.uploadcare--widget__button.uploadcare--widget__button_type_remove') 
        .eq(2)
        .should('exist')
        .should('contain', 'Remove')

    // 19
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.MuiOutlinedInput-inputAdornedStart')
        .eq(0)
        .click()
    cy.get('.MuiInputAdornment-root.MuiInputAdornment-positionStart > div > div > div > div')
        .eq(0)
        .should('exist')
        .should('be.visible')

    // 20
    cy.get('div[title="#D0021B"]')
        .click()
    cy.get('body')
        .click(100, 100)

    // 21
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.MuiOutlinedInput-inputAdornedStart')
        .eq(1)
        .click()
    cy.get('.MuiInputAdornment-root.MuiInputAdornment-positionStart > div > div > div > div')
        .should('exist')
        .should('be.visible')

    // 22
    cy.get('div[title="#7ED321"]')
        .click()
    cy.get('body')
        .click(100, 100)
        
    // 23
    cy.get('.MuiGrid-grid-md-12 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .click()
        .clear()
    cy.get('.MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
        .should('exist')
        .should('be.visible')
        .should('contain', user.welcome_message_error_message)

    // 24
    cy.get('.MuiGrid-grid-md-12 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(user.welcome_message)
    cy.get('.MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
        .should('not.exist')

    // 25
    cy.get('#demo-customized-select')
        .click()
    cy.get('[aria-expanded="true"]')
        .should('exist')

    // 26
    cy.contains('Roboto')
        .click({force: true})
    cy.get('body')
        .click(20, 50)

    // 27
    cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
    cy.get('.MuiAlert-message > .MuiTypography-root')
        .should('exist')
        .should('be.visible')
        .should('contain', user.customer_service_email_error_message)

    // 28
    cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(user.customer_service_email)
    cy.get('.MuiAlert-message > .MuiTypography-root')
        .should('not.exist')

    // 29
    cy.get(':nth-child(5) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
    cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
        .should('exist')
        .should('contain', user.return_policy_error_message)

    // 30
    cy.get(':nth-child(5) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(user.return_policy_link)
    cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
        .should('not.exist')

    // 31
    cy.get(':nth-child(6) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
    cy.get(':nth-child(6) > .MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
        .should('exist')
        .should('contain', user.shopping_link_error_message)

    // 32
    cy.get(':nth-child(6) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(user.shopping_link)

    // 33
    cy.contains('Save Changes')
        .click()
    cy.get('[data-testid="successIndicator"]')
        .should('exist')
        .should('be.visible')
        .should('contain', user.page_update_success_message)

    // 34 
    cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
    cy.get('.MuiAlert-message > .MuiTypography-root')
        .should('exist')
        .should('be.visible')
        .should('contain', user.customer_service_email_error_message)

    // 35
    cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(user.customer_service_email2)
    cy.get('.MuiAlert-message > .MuiTypography-root')
        .should('not.exist')

    // 36
    cy.contains('Discard Changes')
        .click()
    cy.contains(user.customer_service_email2)
        .should('not.exist')
})