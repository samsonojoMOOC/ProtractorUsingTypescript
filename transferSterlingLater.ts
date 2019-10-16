import {element, browser, by, protractor} from "protractor";
import { transfers } from "./pageObject/transfer";


import { async } from "q";

describe('Sterling One Pay --', ()=>{

    it('User should be able to Sign', async()=>{
        let transfer = new transfers;
        browser.waitForAngularEnabled();

        await transfer.transferLink.click();
        await transfer.newTransferLink.click();
        await transfer.fromAccount.click();
        browser.sleep(5000);
        
        await transfer.toAccount.sendKeys("0025065931");
        browser.sleep(8000);
        

        await transfer.amount.sendKeys("100");
        await transfer.narationText.sendKeys("Test Automation");
        await transfer.transferLater.click();
        await transfer.transferLaterStartDate.click();
        browser.sleep(3000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);
        await transfer.continueBtn.click();
        await transfer.continueBtnModal.click();
        browser.sleep(5000);
        await transfer.otpText.sendKeys("1234");
        browser.sleep(5000);
        await transfer.continueBtnModal.click();
        browser.sleep(5000);



    })
})