describe('Sterling One Pay -- ', function(){

    it('User should be able to Login', function(){

       browser.waitForAngularEnabled(false);
        
        browser.get('http://104.42.70.106:4203/login');
        browser.driver.manage().window().maximize();

        element(by.xpath("//div[@class='close-button-modal color-primary']")).click();
        element(by.id("username")).sendKeys("ebonez");
        element(by.id("password")).sendKeys("Test123$");
        browser.sleep(2000);
        element(by.id("sign-in-button")).click();
        //browser.actions().click(element(by.xpath("//span[text()='Login']"))).perform();
        //browser.sleep(10000);
      

    });



 
})

  