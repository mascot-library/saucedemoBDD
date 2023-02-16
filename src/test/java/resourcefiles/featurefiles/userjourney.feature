Feature: User journey from choosing items - adding them to cart - and checkout
  As a user I want to be able to choose items, add them ot cart and checkout successfully.

  user journey from login to adding product to checkout with one set of value

  @regression
  Scenario: Verify that user is able to choose items, add them to cart and checkout successfully.
    Given User is on SauceDemo login page
    When User logs in with credential username "standard_user" and password "secret_sauce"
    And User clicks on Login button
    And User filters the products by Price sort by "Price (high to low)"
    And User selects cheapest & costliest products and add to basket
    And User opens shopping cart
    And User clicks on to checkout button
    And User enters details firstname "Tom", lastName "Cat" and zipPostalCode "CM20 2SE"
    And User clicks on continue button
    And User clicks on finish button
    Then User should be able to see message "Thank you for your order"


    # this scenario will run multiple times depending on number of data sets provided under examples
  @regression
  Scenario Outline: Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.
    Given User is on SauceDemo login page
    When User logs in with credential username "standard_user" and password "secret_sauce"
    And User clicks on Login button
    And User filters the products by Price sort by "<sortBy>"
    And User selects cheapest & costliest products and add to basket
    And User opens shopping cart
    And User clicks on to checkout button
    And User enters details firstname "<firstName>", lastName "<lastName>" and zipPostalCode "<postcode>"
    And User clicks on continue button
    And User clicks on finish button
    Then User should be able to see message "Thank you for your order"
    Examples:
      | sortBy              | firstName | lastName | postcode |
      | Price (high to low) | Micky     | Smith    | PA2 8JE  |
      | Name (Z to A)       | Johey     | Dobson   | JN4 5KD  |
      | Price (low to high) | Tanya     | Mara     | IG4 9LA  |


        # scenario will add different item by revising products page for single user
  @regression
  Scenario: Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.
    Given User is on SauceDemo login page
    When User logs in with credential username "standard_user" and password "secret_sauce"
    And User clicks on Login button
    And User filters the products by Price sort by "Price (high to low)"
    And User selects cheapest & costliest products and add to basket
    And User opens shopping cart
    And User clicks on continue shopping button to add below items
      | items                   |
      | Sauce Labs Bolt T-Shirt |
      | Sauce Labs Bike Light   |

    And User opens shopping cart
    And User clicks on to checkout button
    And User enters details firstname "michalle", lastName "bolt" and zipPostalCode "TN12 8HR"
    And User clicks on continue button
    And User clicks on finish button
    Then User should be able to see message "Thank you for your order"
    

    # user will be able to continue shopping by going back from cart and add more products and then checkout successfully
    # the scenario will then be executed with different users information
  @regression
  Scenario Outline: Verify that user is able to add item in cart and checkout successfully and repeat the journey successfully.
    Given User is on SauceDemo login page
    When User logs in with credential username "standard_user" and password "secret_sauce"
    And User clicks on Login button
    And User filters the products by Price sort by "Price (high to low)"
    And User selects cheapest & costliest products and add to basket
    And User opens shopping cart
    And User clicks on continue shopping button to add below items
      | items                   |
      | Sauce Labs Bolt T-Shirt |
      | Sauce Labs Bike Light   |

    And User opens shopping cart
    And User clicks on to checkout button
    And User enters details firstname "<firstName>", lastName "<lastName>" and zipPostalCode "<postcode>"
    And User clicks on continue button
    And User clicks on finish button
    Then User should be able to see message "Thank you for your order"
    Examples:
      | sortBy              | firstName | lastName | postcode |
      | Price (high to low) | Micky     | Smith    | PA2 8JE  |
      | Name (Z to A)       | Johey     | Dobson   | JN4 5KD  |
      | Price (low to high) | Tanya     | Mara     | IG4 9LA  |



