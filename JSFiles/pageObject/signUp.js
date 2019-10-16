"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class signUp {
    //continueGenderBtn:ElementFinder;
    constructor() {
        this.initialElement = protractor_1.element(protractor_1.by.xpath("//div[@class='close-button-modal color-primary']"));
        this.signUpLink = protractor_1.element(protractor_1.by.xpath("//a[text()='Sign Up']"));
        this.withoutSterlingCardBtn = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'I don’t have a Sterling Bank Account')]"));
        this.bvnText = protractor_1.element(protractor_1.by.id("accountNumber"));
        this.firstNameText = protractor_1.element(protractor_1.by.id("firstName"));
        this.lastNameText = protractor_1.element(protractor_1.by.id("lastName"));
        this.birthDate = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Date Of Birth*']"));
        this.continueBtn = protractor_1.element(protractor_1.by.id("continue-button"));
        this.genderMale = protractor_1.element(protractor_1.by.id("gender-m"));
        this.genderFemale = protractor_1.element(protractor_1.by.id("gender-f"));
        this.titleDrd = protractor_1.element(protractor_1.by.tagName("select#sel-title"));
        this.selectTheValue = protractor_1.element(protractor_1.by.css("#sel-title [value='1: Object']")); //element(by.css("#first [value='Yahoo']")).click();
        this.continueGenderBtn = protractor_1.element(protractor_1.by.xpath("//span[text()='Continue']"));
        this.mobileNumberText = protractor_1.element(protractor_1.by.id("mobileNumber"));
        this.emailText = protractor_1.element(protractor_1.by.id("email"));
        this.homeAddressText = protractor_1.element(protractor_1.by.name("narration"));
        this.referrerCode = protractor_1.element(protractor_1.by.id("refCode"));
    }
}
exports.signUp = signUp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9zaWduVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxNQUFNO0lBcUJmLGtDQUFrQztJQUVsQztRQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUM7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBSTdFLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFFLG9EQUFvRDtRQUM5SCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFXbEQsQ0FBQztDQUNKO0FBeERELHdCQXdEQyJ9