import { ElementFinder, element, by } from "protractor";

 export class loginSuccessful{
    successMessage:ElementFinder;
    successBtn:ElementFinder;

    constructor(){
        this.successMessage = element(by.className('success-message'));
        this.successBtn = element(by.className('btn btn-primary'));

    }
}