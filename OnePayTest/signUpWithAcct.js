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
const signUpWithAccount_1 = require("./pageObject/signUpWithAccount");
describe('Sterling One Pay --', () => {
    it('Sign Up with Sterling Acct Number', () => __awaiter(this, void 0, void 0, function* () {
        let signupSterlingAcct = new signUpWithAccount_1.signupWithAcct;
        let EC = protractor_1.protractor.ExpectedConditions;
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://104.42.70.106:4203/login');
        yield protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.sleep(3000);
        yield signupSterlingAcct.initialModalDialog.click();
        protractor_1.browser.sleep(3000);
        yield signupSterlingAcct.signUpLink.click();
        protractor_1.browser.sleep(3000);
        yield signupSterlingAcct.withSterlingAccount.click();
        yield signupSterlingAcct.accountNumber.sendKeys("0063991296");
        yield signupSterlingAcct.continueBtn.click();
        protractor_1.browser.sleep(5000);
        yield expect(signupSterlingAcct.validateAccount.getText()).toContain("We've found you!");
        yield signupSterlingAcct.continueBtn.click();
        protractor_1.browser.sleep(5000);
        protractor_1.browser.wait(EC.visibilityOf(signupSterlingAcct.sterlingCardImage), 25000);
        yield signupSterlingAcct.sterlingCardImage.click();
        protractor_1.browser.sleep(5000);
        yield signupSterlingAcct.cardFourDigit.sendKeys("3546");
        yield signupSterlingAcct.cardExpiredDate.sendKeys("1012");
        yield signupSterlingAcct.cardCVV.sendKeys("234");
        yield signupSterlingAcct.cardPIN.sendKeys("2345");
        yield signupSterlingAcct.cardConfirmBtn.click();
        protractor_1.browser.sleep(5000);
        /*await expect(signupSterlingAcct.cardValidation.getText()).toContain("card could not be validated");*/
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwV2l0aEFjY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zaWduVXBXaXRoQWNjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1FO0FBQ25FLHNFQUE4RDtBQUU5RCxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRSxFQUFFO0lBRWhDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFPLEVBQUU7UUFDN0MsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFjLENBQUM7UUFDNUMsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUd2QyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsTUFBTSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQixNQUFNLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JELE1BQU0sa0JBQWtCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxNQUFNLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RixNQUFNLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU3QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0UsTUFBTSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsTUFBTSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3pELE1BQU0sa0JBQWtCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxNQUFNLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsdUdBQXVHO0lBRTFHLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9