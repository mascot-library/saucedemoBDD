package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SingleProductPage extends ReUsableMethods {

    private static final Logger log = LogManager.getLogger(SingleProductPage.class.getName());

    public SingleProductPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//button[@class='btn btn_primary btn_small btn_inventory']")
    WebElement addToCartButton;

    @FindBy(id = "back-to-products")
    WebElement backToProductsButton;

    public void clickOnBackToProductsButton(){
        clickOnElement(backToProductsButton);
        log.info("Clicking on back to products button");
    }

    public void clickOnAddToCartButton() {
        clickOnElement(addToCartButton);
        log.info("Clicking on add to cart button");
    }

}
