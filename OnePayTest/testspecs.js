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
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObject/calculator");
const angularHomePage_1 = require("./pageObject/angularHomePage");
describe('Chain locator', () => {
    it('first test', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.calculator;
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys('823');
        yield calc.secondEditBox.sendKeys('6');
        yield calc.goButton.click();
        /* Resolving promise bcos getText() isnt resolved by protractor*/
        calc.getResult.getText().then(function (text) {
            console.log('This is the: ' + text);
        });
    }));
    it('Angular home page', () => __awaiter(this, void 0, void 0, function* () {
        let angularPg = new angularHomePage_1.angularHomePage;
        yield protractor_1.browser.get('http://angularjs.org');
        yield angularPg.firstLink.click();
        yield angularPg.secondLink.sendKeys();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUM7QUFHbkMsd0RBQXFEO0FBQ3JELGtFQUErRDtBQUUvRCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUUsRUFBRTtJQUUxQixFQUFFLENBQUMsWUFBWSxFQUFFLEdBQU8sRUFBRTtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUM7UUFFM0IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQzlELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHNUIsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBTyxFQUFFO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksaUNBQWUsQ0FBQztRQUNwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDMUMsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==