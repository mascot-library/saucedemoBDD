package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutYourInformationPage extends ReUsableMethods {


    private static final Logger log = LogManager.getLogger(CheckoutYourInformationPage.class.getName());

    public CheckoutYourInformationPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "first-name")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "last-name")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "postal-code")
    WebElement postalCode;

    @CacheLookup
    @FindBy(id = "continue")
    WebElement continueButton;



    public void enterPersonalInformationOnCheckOutPage(String fname, String lname, String postcode) {
        sendTextToElement(firstName, fname);
        log.info("Entering firstname: "+fname);
        sendTextToElement(lastName, lname);
        log.info("Entering lastname: "+lname);
        sendTextToElement(postalCode, postcode);
        log.info("Entering zip postal code: "+postcode);
    }

    public void clickOnContinueButton() {
        clickOnElement(continueButton);
        log.info("Clicking on Continue button");
    }


}
