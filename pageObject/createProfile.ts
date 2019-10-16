import { ElementFinder,element,by } from "protractor";

export class createProfile{
    userNameText:ElementFinder;
    passwordText:ElementFinder;
    confirmPasswordText:ElementFinder;
    pinText:ElementFinder;
    confirmPinText:ElementFinder;
    questionOne:ElementFinder;
    answerOne:ElementFinder;
    questionTwo:ElementFinder;
    answerTwo:ElementFinder;
    questionThree:ElementFinder;
    answerThree:ElementFinder;
    readAgreement:ElementFinder;
    completeProfile:ElementFinder;

    constructor(){
        this.userNameText = element(by.id("username"));
        this.passwordText = element(by.id("password"));
        this.confirmPasswordText = element(by.id("confirmPassword"));
        this.pinText = element(by.id("pin"));
        this.confirmPinText = element(by.id("confirmPin"));
        this.questionOne = element(by.id("q1")).element(by.css("option:nth-child(2)"));
        this.answerOne = element(by.id("ans1"));
        this.questionTwo = element(by.id("q2")).element(by.css("option:nth-child(8)"));
        this.answerTwo = element(by.id("ans2"));
        this.questionThree = element(by.id("q3")).element(by.css("option:nth-child(14)"));
        this.answerThree = element(by.id("ans3"));
        this.readAgreement = element(by.id("check-terms"));
        this.completeProfile = element(by.xpath("//span[text()='Complete Profile']"));

    }
}