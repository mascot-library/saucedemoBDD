package com.saucedemo.reusablemethods;

import com.saucedemo.managedrivers.ManageDrivers;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class ReUsableMethods extends ManageDrivers {

    public void sendTextToElement(WebElement element, String text) {
        element.sendKeys(text);
    }


    public void clickOnElement(WebElement element) {
        element.click();
    }

    public void selectByVisibleTextFromDropDown(WebElement element, String text) {
        Select select = new Select(element);
        select.selectByVisibleText(text);
    }
}
