package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends ReUsableMethods {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "user-name")
    WebElement userName;

    @CacheLookup
    @FindBy(id = "password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;

    public void loginWithCorrectCredentials(String user, String pass) {
        sendTextToElement(userName, user);
        log.info("sending text to username field: " + user);
        sendTextToElement(password, pass);
        log.info("sending text to password field: " + pass);
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
        log.info("Clicking on login button");
    }

    public String returnActualUrl() {
        log.info("getting actual url: " + driver.getCurrentUrl());
        return driver.getCurrentUrl();
    }
}


