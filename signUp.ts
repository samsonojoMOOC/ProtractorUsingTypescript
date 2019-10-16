import {element, browser, by, protractor} from "protractor";
import { signUp } from "./pageObject/signUp";


import { async } from "q";

describe('Sterling One Pay --', ()=>{

    it('User should be able to Sign', async()=>{
        let signup = new signUp;

        //await browser.waitForAngularEnabled(false);
        
        await browser.get('http://104.42.70.106:4203/login');
        await browser.driver.manage().window().maximize();
        

        await signup.initialElement.click();
        browser.sleep(3000);

       await signup.signUpLink.click();
       browser.sleep(5000);
       await signup.withoutSterlingCardBtn.click();
       await signup.bvnText.sendKeys("12345678911");
       await signup.firstNameText.sendKeys("James");
       await signup.lastNameText.sendKeys("Mohammed");
       await signup.birthDate.click();
       browser.sleep(5000);
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       browser.sleep(2000);
       await signup.continueBtn.click();
       browser.sleep(2000);
       await signup.genderMale.click();

       await signup.titleDrd.click();
       await signup.selectTheValue.click();
       await signup.continueGenderBtn.click();
       browser.sleep(5000);
       await signup.mobileNumberText.sendKeys("08032345879");
       await signup.emailText.sendKeys("s@j.com");
       await signup.homeAddressText.sendKeys("3, Jame Adrew Close, ajah");
       browser.sleep(3000);
       await signup.continueGenderBtn.click();
       browser.sleep(3000);
       await signup.referrerCode.sendKeys("1234");
       browser.sleep(3000);
       await signup.continueGenderBtn.click();



    })
})