import { ElementFinder, element, by } from "protractor";

export class angularHomePage {
    firstLink:ElementFinder;
    secondLink:ElementFinder;

    constructor(){
        this.firstLink = element(by.linkText("angular.io"));
        this.secondLink = element(by.css("input[type='search']"));
    }
}