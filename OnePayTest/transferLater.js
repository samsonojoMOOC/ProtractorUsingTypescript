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
const transfer_1 = require("./pageObject/transfer");
describe('Sterling One Pay --', () => {
    it('User should be able to Sign', () => __awaiter(this, void 0, void 0, function* () {
        let transfer = new transfer_1.transfers;
        protractor_1.browser.waitForAngularEnabled();
        yield transfer.transferLink.click();
        yield transfer.newTransferLink.click();
        yield transfer.fromAccount.click();
        protractor_1.browser.sleep(5000);
        yield transfer.toAccount.sendKeys("0025065931");
        protractor_1.browser.sleep(8000);
        yield transfer.amount.sendKeys("100");
        yield transfer.narationText.sendKeys("Test Automation");
        yield transfer.transferLater.click();
        yield transfer.transferLaterStartDate.click();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        protractor_1.browser.sleep(2000);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        protractor_1.browser.sleep(2000);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        protractor_1.browser.sleep(5000);
        yield transfer.continueBtn.click();
        yield transfer.continueBtnModal.click();
        protractor_1.browser.sleep(5000);
        yield transfer.otpText.sendKeys("1234");
        protractor_1.browser.sleep(5000);
        yield transfer.continueBtnModal.click();
        protractor_1.browser.sleep(5000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJMYXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RyYW5zZmVyTGF0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUE0RDtBQUM1RCxvREFBa0Q7QUFLbEQsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUUsRUFBRTtJQUVoQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO1FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVMsQ0FBQztRQUM3QixvQkFBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFaEMsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLE1BQU0sUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdwQixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsTUFBTSxRQUFRLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLE1BQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=