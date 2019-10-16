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
const loginSuccessful_1 = require("./pageObject/loginSuccessful");
describe('Sterling One Pay -- ', () => {
    it('Login successfully', () => __awaiter(this, void 0, void 0, function* () {
        let loginSuccess = new loginSuccessful_1.loginSuccessful;
        protractor_1.browser.sleep(8000);
        yield expect(loginSuccess.successMessage.getText()).toEqual("You're In!");
        yield loginSuccess.successBtn.click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5TdWNjZXNzZnVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbG9naW5TdWNjZXNzZnVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFFaEQsa0VBQStEO0FBSS9ELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFFLEVBQUU7SUFFakMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQU8sRUFBRTtRQUM5QixJQUFJLFlBQVksR0FBRyxJQUFJLGlDQUFlLENBQUM7UUFDdkMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRSxNQUFNLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=