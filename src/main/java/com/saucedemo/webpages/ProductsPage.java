package com.saucedemo.webpages;

import com.saucedemo.reusablemethods.ReUsableMethods;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductsPage extends ReUsableMethods {

    private static final Logger log = LogManager.getLogger(ProductsPage.class.getName());

    public ProductsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@class='product_sort_container']")
    WebElement dropDown;

    @FindBy(xpath = "//button[@class='btn btn_primary btn_small btn_inventory']")
    List<WebElement> products;

    @CacheLookup
    @FindBy(xpath = "//a[@class='shopping_cart_link']")
    WebElement cart;

    @CacheLookup
    @FindBy(xpath = "//div[@class='inventory_item_name']")
    List<WebElement> listOfProductsByName;

    public void selectOptionFromDropdown(String visibleText) {
        selectByVisibleTextFromDropDown(dropDown, visibleText);
        log.info("Select option from dropdown: " + visibleText);
    }

    public void selectCostliestProductAndAddToTheBasket() {

        for (int i = 0; i < products.size(); i++) {
            if (i == 0 || i == products.size() - 1) {
                log.info("Adding product to the cart: " + products.get(i).toString());
                clickOnElement(products.get(i));
            }
        }
    }

    public void selectProductByName(String nameOfProduct) {
        for (WebElement item : listOfProductsByName) {
            if (item.getText().equals(nameOfProduct)) {
                item.click();
                log.info("Clicking on single product: " + nameOfProduct);
                break;
            }
        }
    }

    public void openShoppingCart(){
        clickOnElement(cart);
        log.info("Opening shopping cart");
    }

}
