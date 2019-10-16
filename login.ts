import {browser, element, by} from "protractor";
import { async } from "q";
import {login} from "./pageObject/login";



describe('Sterling One Pay -- ', ()=>{

    it('User should be able to Login', async()=>{
        let loginPage = new login;

        await browser.waitForAngularEnabled(false);
        
        await browser.get('http://104.42.70.106:4203/login');
        await browser.driver.manage().window().maximize();

        await loginPage.initialElement.click();
        await loginPage.userNameText.sendKeys("niffles001");
        await loginPage.passwordText.sendKeys("password");
        browser.sleep(2000);
        await loginPage.loginBtn.click();
        //browser.actions().click(element(by.xpath("//span[text()='Login']"))).perform();
        //browser.sleep(10000);
      

    });



 
})

  