import { ElementFinder, element, by } from "protractor";

export class welcome{
    welcomeMsg:ElementFinder;
    welcomeBtn:ElementFinder;

    constructor(){
        this.welcomeMsg = element(by.className("success-message"));
        this.welcomeBtn = element(by.id("reset-button"));
    }
}