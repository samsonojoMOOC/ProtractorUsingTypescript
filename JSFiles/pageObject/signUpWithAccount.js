"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class signupWithAcct {
    constructor() {
        this.initialModalDialog = protractor_1.element(protractor_1.by.xpath("//div[@class='close-button-modal color-primary']"));
        this.signUpLink = protractor_1.element(protractor_1.by.xpath("//a[text()='Sign Up']"));
        this.withSterlingAccount = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'I have a Sterling Bank Account')]"));
        this.accountNumber = protractor_1.element(protractor_1.by.id("accountNumber"));
        this.continueBtn = protractor_1.element(protractor_1.by.id("continue-button"));
        this.validateAccount = protractor_1.element(protractor_1.by.xpath("//app-onboarding/section/div[2]//p[@class='sub-title']"));
        this.sterlingCardImage = protractor_1.element(protractor_1.by.xpath("//div[@class='number text-center']"));
        this.cardFourDigit = protractor_1.element(protractor_1.by.id("fourDigit"));
        this.cardExpiredDate = protractor_1.element(protractor_1.by.id("expiryDate"));
        this.cardCVV = protractor_1.element(protractor_1.by.id("cvv"));
        this.cardPIN = protractor_1.element(protractor_1.by.id("cardPin"));
        this.cardConfirmBtn = protractor_1.element(protractor_1.by.id("confirm-button"));
        this.cardValidation = protractor_1.element(protractor_1.by.xpath("//p[text()='card could not be validated']"));
    }
}
exports.signupWithAcct = signupWithAcct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwV2l0aEFjY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L3NpZ25VcFdpdGhBY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsY0FBYztJQWV2QjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFDO0lBR3pGLENBQUM7Q0FDSjtBQWhDRCx3Q0FnQ0MifQ==