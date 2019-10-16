import { ElementFinder, element, by } from "protractor";

export class login{
    initialElement:ElementFinder;
    userNameText:ElementFinder;
    passwordText:ElementFinder;
    loginBtn:ElementFinder;

    constructor(){
        this.initialElement = element(by.xpath("//div[@class='close-button-modal color-primary']"));
        this.userNameText = element(by.id("username"));
        this.passwordText = element(by.id("password"));
        this.loginBtn = element(by.id("sign-in-button"));

    }
}