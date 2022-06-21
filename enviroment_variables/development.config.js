const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    admin_password:
      "",
    locate_order_url:
      "https://rb-luxury-qa.portals-beta.development.returnbear.com/",
    select_items_url:
      "https://rb-luxury-qa.portals-beta.development.returnbear.com/return/select-items",
    return_method_url:
      "https://rb-luxury-qa.portals-beta.development.returnbear.com/return/return-method",
    payout_method_url:
      "https://rb-luxury-qa.portals-beta.development.returnbear.com/return/payout-method",
    review_url:
      "https://rb-luxury-qa.portals-beta.development.returnbear.com/return/review",
    confirmation_url:
      "https://rb-luxury-qa.portals-beta.development.returnbear.com/return/confirmation",
    admin_url: 
      "https://admin.development.returnbear.com/",
    admin_login_url: 
      "https://admin.development.returnbear.com/login",
    return_case_url: 
      "https://admin.development.returnbear.com/return-case",
    settings_url: 
      "https://admin.development.returnbear.com/settings",
    settings_return_policy_url:
      "https://admin.development.returnbear.com/settings/return-policy",
    settings_consumer_portal_url:
      "https://admin.development.returnbear.com/settings/consumer-portal",
    settings_shipping_courier_url:
      "https://admin.development.returnbear.com/settings/shipping-courier",
    settings_payout_methods_url:
      "https://admin.development.returnbear.com/settings/payout-methods",
    settings_automation_url:
      "https://admin.development.returnbear.com/settings/automation",
    settings_automation_new_url:
      "https://admin.development.returnbear.com/settings/automation/new",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
