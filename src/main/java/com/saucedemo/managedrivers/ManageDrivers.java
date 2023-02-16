package com.saucedemo.managedrivers;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

public class ManageDrivers {

    public static final Logger log = LogManager.getLogger(ManageDrivers.class.getName());

    public static WebDriver driver;
    public ManageDrivers() {
        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/test/java/resourcefiles/log4jjpropertyfile/log4j2.properties");
    }

    //public static String browser = "chrome";

    public void selectBrowser(String browser) {
        switch (browser) {
            case "chrome":
                //WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                log.info("launching chrome browser");
                break;
            case "firefox":
                //WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                log.info("launching firefox browser");
                break;
        }

        driver.get("https://www.saucedemo.com/");
        driver.manage().window().maximize();
        //  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(seconds));
    }

    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }
}
