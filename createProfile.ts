import { async } from "q";
import { createProfile } from "./pageObject/createProfile";
import { browser } from "protractor";

describe('Sterling OnePay --', ()=>{

    it('Create profile', async()=>{
        let createprofile = new createProfile;

        createprofile.userNameText.sendKeys("samosamo");
        createprofile.passwordText.sendKeys("$jayjay123J");
        createprofile.confirmPasswordText.sendKeys("$jayjay123J");
        createprofile.pinText.sendKeys("1234");
        createprofile.confirmPinText.sendKeys("1234");
        browser.sleep(8000);
        createprofile.questionOne.click();
        browser.sleep(5000);
        createprofile.answerOne.sendKeys("Mohammed");
        browser.sleep(3000);
        createprofile.questionTwo.click();
        createprofile.answerTwo.sendKeys("a6");
        createprofile.questionThree.click();
        createprofile.answerThree.sendKeys("TeamApt");
        browser.sleep(5000);
        createprofile.readAgreement.click();
        browser.sleep(5000);
        createprofile.completeProfile.click();
        browser.sleep(10000);
    })
})