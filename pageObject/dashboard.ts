import { ElementFinder, element, by } from "protractor";

export class dashboard{
    dashbrd:ElementFinder;

    constructor(){
        this.dashbrd = element(by.xpath("//p[@class=' welcome-msg']"));
    }
}