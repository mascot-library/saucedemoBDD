package com.saucedemo.cucumber.stepdefs;

import com.saucedemo.webpages.*;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class UserJourneyStepDef {
    @Given("^User is on SauceDemo login page$")
    public void user_is_on_SauceDemo_login_page() {
        Assert.assertEquals(new LoginPage().returnActualUrl(), "https://www.saucedemo.com/");
    }

    @When("^User logs in with credential username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_logs_in_with_credential_username_and_password(String username, String password) {
        new LoginPage().loginWithCorrectCredentials(username, password);
    }

    @When("^User clicks on Login button$")
    public void user_clicks_on_Login_button() {
        new LoginPage().clickOnLoginButton();
    }

    @When("^User filters the products by Price sort by \"([^\"]*)\"$")
    public void user_filters_the_products_by_Price_sort_by(String priceFilter) {
        new ProductsPage().selectOptionFromDropdown(priceFilter);
    }

    @When("^User selects cheapest & costliest products and add to basket$")
    public void user_selects_cheapest_costliest_products_and_add_to_basket() {
        new ProductsPage().selectCostliestProductAndAddToTheBasket();
    }

    @When("^User opens shopping cart$")
    public void user_opens_shopping_cart() throws InterruptedException {
        new ProductsPage().openShoppingCart();
    }

    @When("^User clicks on to checkout button$")
    public void user_clicks_on_to_checkout_button() {
        new YourCartPage().clickOnCheckoutButton();
    }

    @When("^User enters details firstname \"([^\"]*)\", lastName \"([^\"]*)\" and zipPostalCode \"([^\"]*)\"$")
    public void user_enters_details_firstname_lastName_and_zipPostalCode(String firstName, String lastName, String zipPostalCode) {
        new CheckoutYourInformationPage().enterPersonalInformationOnCheckOutPage(firstName, lastName, zipPostalCode);
    }

    @When("^User clicks on continue button$")
    public void user_clicks_on_continue_button() {
        new CheckoutYourInformationPage().clickOnContinueButton();
    }

    @When("^User clicks on finish button$")
    public void user_clicks_on_finish_button() {
        new CheckoutOverviewPage().clickOnFinishButton();
    }

    @Then("^User should be able to see message \"([^\"]*)\"$")
    public void user_should_be_able_to_see_message(String expectedMessage) {
        org.junit.Assert.assertTrue(new CheckoutCompletePage().actualConfirmationMessage().equalsIgnoreCase(expectedMessage));
    }

    @And("^User clicks on continue shopping button to add below items$")
    public void userClicksOnContinueShoppingButtonToAddBelowItems(DataTable dataTable) {

        // user clicks on continue shopping button
        new YourCartPage().clickOnContinueShoppingButton();

        // user click on single product
        List<Map<String, String>> listOfMaps = dataTable.asMaps(String.class, String.class);
        String itemName = listOfMaps.get(0).get("items");
        new ProductsPage().selectProductByName(itemName);


        // user visits single product page
        // user clicks on add to cart button
        new SingleProductPage().clickOnAddToCartButton();
        // user clicks on back to shopping button
        new SingleProductPage().clickOnBackToProductsButton();


    }
}
