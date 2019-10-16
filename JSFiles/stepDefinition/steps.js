"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObject/calculator");
const protractor_1 = require("protractor");
let calc = new calculator_1.calculator;
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "Calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "Angularjs") {
        yield protractor_1.browser.get('http://angularjs.org');
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('The output should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.goButton.click();
    yield calc.getResult.getText().then(function (text) {
        console.log('This is the: ' + text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBRTdDLHlEQUFzRDtBQUN0RCwyQ0FBcUM7QUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxDQUFDO0FBRWpCLGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUN6RCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUksTUFBTSxFQUNuQjtRQUNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTtTQUNJLElBQUcsTUFBTSxJQUFJLFdBQVcsRUFDN0I7UUFDRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDM0M7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0YsZUFBSSxDQUFDLHlDQUF5QyxFQUFHLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3RFLG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywrQkFBK0IsRUFBRyxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQ3BELG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=