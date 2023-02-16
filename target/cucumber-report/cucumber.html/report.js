$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userjourney.feature");
formatter.feature({
  "line": 1,
  "name": "User journey from choosing items - adding them to cart - and checkout",
  "description": "As a user I want to be able to choose items, add them ot cart and checkout successfully.",
  "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "# user will be able to continue shopping by going back from cart and add more products and then checkout successfully"
    }
  ],
  "line": 44,
  "name": "Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.",
  "description": "",
  "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User logs in with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User filters the products by Price sort by \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User selects cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User clicks on continue shopping button to add below items",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 52
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 53
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enters details firstname \"\u003cfirstName\u003e\", lastName \"\u003clastName\u003e\" and zipPostalCode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should be able to see message \"Thank you for your order\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;",
  "rows": [
    {
      "cells": [
        "sortBy",
        "firstName",
        "lastName",
        "postcode"
      ],
      "line": 63,
      "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;1"
    },
    {
      "cells": [
        "Price (high to low)",
        "Micky",
        "Smith",
        "PA2 8JE"
      ],
      "line": 64,
      "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;2"
    },
    {
      "cells": [
        "Name (Z to A)",
        "Johey",
        "Dobson",
        "JN4 5KD"
      ],
      "line": 65,
      "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;3"
    },
    {
      "cells": [
        "Price (low to high)",
        "Tanya",
        "Mara",
        "IG4 9LA"
      ],
      "line": 66,
      "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4029217700,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.",
  "description": "",
  "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User logs in with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User filters the products by Price sort by \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User selects cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User clicks on continue shopping button to add below items",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 52
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 53
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enters details firstname \"Micky\", lastName \"Smith\" and zipPostalCode \"PA2 8JE\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should be able to see message \"Thank you for your order\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserJourneyStepDef.user_is_on_SauceDemo_login_page()"
});
formatter.result({
  "duration": 149487900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 68
    }
  ],
  "location": "UserJourneyStepDef.user_logs_in_with_credential_username_and_password(String,String)"
});
formatter.result({
  "duration": 182356400,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 114583700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 44
    }
  ],
  "location": "UserJourneyStepDef.user_filters_the_products_by_Price_sort_by(String)"
});
formatter.result({
  "duration": 123776400,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_selects_cheapest_costliest_products_and_add_to_basket()"
});
formatter.result({
  "duration": 190664000,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_opens_shopping_cart()"
});
formatter.result({
  "duration": 54273700,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.userClicksOnContinueShoppingButtonToAddBelowItems(DataTable)"
});
formatter.result({
  "duration": 274430200,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_opens_shopping_cart()"
});
formatter.result({
  "duration": 47646800,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_to_checkout_button()"
});
formatter.result({
  "duration": 56272800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Micky",
      "offset": 31
    },
    {
      "val": "Smith",
      "offset": 49
    },
    {
      "val": "PA2 8JE",
      "offset": 75
    }
  ],
  "location": "UserJourneyStepDef.user_enters_details_firstname_lastName_and_zipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 228639200,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 59009900,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_finish_button()"
});
formatter.result({
  "duration": 58757900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your order",
      "offset": 36
    }
  ],
  "location": "UserJourneyStepDef.user_should_be_able_to_see_message(String)"
});
formatter.result({
  "duration": 41086800,
  "status": "passed"
});
formatter.after({
  "duration": 685940300,
  "status": "passed"
});
formatter.before({
  "duration": 1736267200,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.",
  "description": "",
  "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User logs in with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User filters the products by Price sort by \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User selects cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User clicks on continue shopping button to add below items",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 52
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 53
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enters details firstname \"Johey\", lastName \"Dobson\" and zipPostalCode \"JN4 5KD\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should be able to see message \"Thank you for your order\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserJourneyStepDef.user_is_on_SauceDemo_login_page()"
});
formatter.result({
  "duration": 18656700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 68
    }
  ],
  "location": "UserJourneyStepDef.user_logs_in_with_credential_username_and_password(String,String)"
});
formatter.result({
  "duration": 164574900,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 110390700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 44
    }
  ],
  "location": "UserJourneyStepDef.user_filters_the_products_by_Price_sort_by(String)"
});
formatter.result({
  "duration": 91508500,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_selects_cheapest_costliest_products_and_add_to_basket()"
});
formatter.result({
  "duration": 175599400,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_opens_shopping_cart()"
});
formatter.result({
  "duration": 45633200,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.userClicksOnContinueShoppingButtonToAddBelowItems(DataTable)"
});
formatter.result({
  "duration": 248330000,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_opens_shopping_cart()"
});
formatter.result({
  "duration": 43874500,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_to_checkout_button()"
});
formatter.result({
  "duration": 46685900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johey",
      "offset": 31
    },
    {
      "val": "Dobson",
      "offset": 49
    },
    {
      "val": "JN4 5KD",
      "offset": 76
    }
  ],
  "location": "UserJourneyStepDef.user_enters_details_firstname_lastName_and_zipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 210084700,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 58303600,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_finish_button()"
});
formatter.result({
  "duration": 49505700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your order",
      "offset": 36
    }
  ],
  "location": "UserJourneyStepDef.user_should_be_able_to_see_message(String)"
});
formatter.result({
  "duration": 34895100,
  "status": "passed"
});
formatter.after({
  "duration": 664351500,
  "status": "passed"
});
formatter.before({
  "duration": 1707201600,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.",
  "description": "",
  "id": "user-journey-from-choosing-items---adding-them-to-cart---and-checkout;verify-that-user-is-able-to-add-item-in-cart-and-checkout-successfully-and-repeat-the-journey-successfully.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User logs in with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User filters the products by Price sort by \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User selects cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User clicks on continue shopping button to add below items",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 52
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 53
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User opens shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enters details firstname \"Tanya\", lastName \"Mara\" and zipPostalCode \"IG4 9LA\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should be able to see message \"Thank you for your order\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserJourneyStepDef.user_is_on_SauceDemo_login_page()"
});
formatter.result({
  "duration": 15621900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 68
    }
  ],
  "location": "UserJourneyStepDef.user_logs_in_with_credential_username_and_password(String,String)"
});
formatter.result({
  "duration": 177616700,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 105417300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 44
    }
  ],
  "location": "UserJourneyStepDef.user_filters_the_products_by_Price_sort_by(String)"
});
formatter.result({
  "duration": 102768200,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_selects_cheapest_costliest_products_and_add_to_basket()"
});
formatter.result({
  "duration": 164984400,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_opens_shopping_cart()"
});
formatter.result({
  "duration": 55070900,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.userClicksOnContinueShoppingButtonToAddBelowItems(DataTable)"
});
formatter.result({
  "duration": 249128600,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_opens_shopping_cart()"
});
formatter.result({
  "duration": 43589000,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_to_checkout_button()"
});
formatter.result({
  "duration": 45361800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tanya",
      "offset": 31
    },
    {
      "val": "Mara",
      "offset": 49
    },
    {
      "val": "IG4 9LA",
      "offset": 74
    }
  ],
  "location": "UserJourneyStepDef.user_enters_details_firstname_lastName_and_zipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 190156900,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 53035900,
  "status": "passed"
});
formatter.match({
  "location": "UserJourneyStepDef.user_clicks_on_finish_button()"
});
formatter.result({
  "duration": 47570000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your order",
      "offset": 36
    }
  ],
  "location": "UserJourneyStepDef.user_should_be_able_to_see_message(String)"
});
formatter.result({
  "duration": 34361500,
  "status": "passed"
});
formatter.after({
  "duration": 664879900,
  "status": "passed"
});
});