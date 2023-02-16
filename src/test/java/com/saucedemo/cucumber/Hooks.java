package com.saucedemo.cucumber;

import com.saucedemo.managedrivers.ManageDrivers;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends ManageDrivers {

    @Before
    public void setUp() {
        selectBrowser("chrome");
    }

    @After
    public void tearDown() {
        closeBrowser();
    }

}
