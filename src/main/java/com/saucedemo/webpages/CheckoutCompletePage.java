package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class CheckoutCompletePage extends ReUsableMethods {

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='THANK YOU FOR YOUR ORDER']")
    WebElement message;


    public String actualConfirmationMessage() {
        log.info("returning actual message: "+message.getText());
       return message.getText();
    }


}
