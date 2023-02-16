package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class CheckoutOverviewPage extends ReUsableMethods {

    private static final Logger log = LogManager.getLogger(CheckoutOverviewPage.class.getName());

    @CacheLookup
    @FindBy(id = "finish")
    WebElement finishButton;


    public void clickOnFinishButton() {
        clickOnElement(finishButton);
        log.info("clicking on finish button");
    }




}
