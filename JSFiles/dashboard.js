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
const dashboard_1 = require("./pageObject/dashboard");
describe('Sterling One Pay --', () => {
    it('User should be Welcome to Dashboard', () => __awaiter(this, void 0, void 0, function* () {
        let dashBrd = new dashboard_1.dashboard;
        protractor_1.browser.sleep(15000);
        yield expect(dashBrd.dashbrd.getText()).toContain('Good Afternoon');
        dashBrd.dashbrd.getText().then(function (text) {
            console.log(text);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFFaEQsc0RBQW1EO0FBRW5ELFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFFLEVBQUU7SUFFaEMsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQU8sRUFBRTtRQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFTLENBQUM7UUFFNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXBFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBRSxDQUFBIn0=