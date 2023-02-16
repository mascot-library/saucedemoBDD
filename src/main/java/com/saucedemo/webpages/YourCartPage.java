package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class YourCartPage extends ReUsableMethods {

    private static final Logger log = LogManager.getLogger(YourCartPage.class.getName());

    public YourCartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "checkout")
    WebElement checkoutButton;

    @CacheLookup
    @FindBy(id = "continue-shopping")
    WebElement continueShoppingButton;

    public void clickOnCheckoutButton() {
        clickOnElement(checkoutButton);
        log.info("Clicking on checkout button");
    }

    public void clickOnContinueShoppingButton() {
        clickOnElement(continueShoppingButton);
        log.info("Clicking on checkout button");
    }

}
