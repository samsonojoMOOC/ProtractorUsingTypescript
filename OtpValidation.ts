import {browser, element, by} from "protractor";
import { otpValidate } from "./pageObject/OtpValidation";
import { async } from "q";

describe('Sterling One Pay -- ', ()=>{

    it('OTP Validation', async()=>{
        let otpValid = new otpValidate;
       // element(by.xpath("//a[contains(text(),'Try another')]")).click();
        //element(by.id("ans")).sendKeys("test");
        browser.sleep(5000);
       await otpValid.otpText.sendKeys('1234');
       
        await otpValid.submitBtn.click();
    })
})