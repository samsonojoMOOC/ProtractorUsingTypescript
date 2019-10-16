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
        yield transfer.otherBanksInstantRadioBtn.click();
        yield transfer.fromAccount.click();
        protractor_1.browser.sleep(5000);
        yield transfer.toAccount.sendKeys("0025065931");
        protractor_1.browser.sleep(8000);
        yield transfer.amount.sendKeys("100");
        yield transfer.narationText.sendKeys("Test Automation");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJPdGhlckJhbmtzSW5zdGFudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RyYW5zZmVyT3RoZXJCYW5rc0luc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUE0RDtBQUM1RCxvREFBa0Q7QUFLbEQsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUUsRUFBRTtJQUVoQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO1FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVMsQ0FBQztRQUM3QixvQkFBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFaEMsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLE1BQU0sUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqRCxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdwQixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUl4QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==