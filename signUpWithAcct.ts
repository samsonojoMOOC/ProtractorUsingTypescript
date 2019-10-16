import {browser, protractor, ExpectedConditions} from "protractor";
import {signupWithAcct} from "./pageObject/signUpWithAccount";

describe('Sterling One Pay --', ()=>{

    it('Sign Up with Sterling Acct Number', async()=>{
        let signupSterlingAcct = new signupWithAcct;
        let EC = protractor.ExpectedConditions;


        await browser.waitForAngularEnabled(false);
        
        await browser.get('http://104.42.70.106:4203/login');
        await browser.driver.manage().window().maximize();
        browser.sleep(3000);
        
        await signupSterlingAcct.initialModalDialog.click();
        browser.sleep(3000);
        
       await signupSterlingAcct.signUpLink.click();
       browser.sleep(3000);
       await signupSterlingAcct.withSterlingAccount.click();
       await signupSterlingAcct.accountNumber.sendKeys("0063991296");
       await signupSterlingAcct.continueBtn.click();
       browser.sleep(5000);
       await expect(signupSterlingAcct.validateAccount.getText()).toContain("We've found you!");
       await signupSterlingAcct.continueBtn.click();

       browser.sleep(5000);

       browser.wait(EC.visibilityOf(signupSterlingAcct.sterlingCardImage), 25000);
       await signupSterlingAcct.sterlingCardImage.click();
       browser.sleep(5000);
       await signupSterlingAcct.cardFourDigit.sendKeys("3546");
       await signupSterlingAcct.cardExpiredDate.sendKeys("1012")
       await signupSterlingAcct.cardCVV.sendKeys("234");
       await signupSterlingAcct.cardPIN.sendKeys("2345");
       await signupSterlingAcct.cardConfirmBtn.click();
       browser.sleep(5000);
       
       /*await expect(signupSterlingAcct.cardValidation.getText()).toContain("card could not be validated");*/

    })
})