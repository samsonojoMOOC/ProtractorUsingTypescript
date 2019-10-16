import { ElementFinder, element, by } from "protractor";

export class signupWithAcct{
    initialModalDialog:ElementFinder;
    signUpLink:ElementFinder;
    withSterlingAccount:ElementFinder
    accountNumber:ElementFinder;
    continueBtn:ElementFinder;
    validateAccount:ElementFinder;
    sterlingCardImage:ElementFinder;
    cardFourDigit:ElementFinder;
    cardExpiredDate:ElementFinder;
    cardCVV:ElementFinder;
    cardPIN:ElementFinder;
    cardConfirmBtn:ElementFinder;
    cardValidation:ElementFinder;

    constructor(){
        this.initialModalDialog = element(by.xpath("//div[@class='close-button-modal color-primary']"));
        this.signUpLink = element(by.xpath("//a[text()='Sign Up']"));
        this.withSterlingAccount = element(by.xpath("//p[contains(text(),'I have a Sterling Bank Account')]"));
        this.accountNumber = element(by.id("accountNumber"));
        this.continueBtn = element(by.id("continue-button"));
        this.validateAccount = element(by.xpath("//app-onboarding/section/div[2]//p[@class='sub-title']"));
        this.sterlingCardImage = element(by.xpath("//div[@class='number text-center']"));
        this.cardFourDigit = element(by.id("fourDigit"));
        this.cardExpiredDate = element(by.id("expiryDate"));
        this.cardCVV = element(by.id("cvv"));
        this.cardPIN = element(by.id("cardPin"));
        this.cardConfirmBtn = element(by.id("confirm-button"));
        this.cardValidation = element(by.xpath("//p[text()='card could not be validated']"));

            
    }
}