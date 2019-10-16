import { ElementFinder, element, by } from "protractor";

export class otpValidate{
    otpText:ElementFinder;
    submitBtn:ElementFinder;

    constructor(){
        this.otpText = element(by.xpath("//input[@name='OTP']"));
        this.submitBtn = element(by.id('continue-button'));
    }
}