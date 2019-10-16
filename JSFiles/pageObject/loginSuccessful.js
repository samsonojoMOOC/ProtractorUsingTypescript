"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class loginSuccessful {
    constructor() {
        this.successMessage = protractor_1.element(protractor_1.by.className('success-message'));
        this.successBtn = protractor_1.element(protractor_1.by.className('btn btn-primary'));
    }
}
exports.loginSuccessful = loginSuccessful;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5TdWNjZXNzZnVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9sb2dpblN1Y2Nlc3NmdWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFdkQsTUFBYSxlQUFlO0lBSXpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUvRCxDQUFDO0NBQ0o7QUFUQSwwQ0FTQSJ9