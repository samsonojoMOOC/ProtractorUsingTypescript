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
const welcome_1 = require("./pageObject/welcome");
describe('Sterling One Pay -- ', () => {
    it('Verify Welcome message', () => __awaiter(this, void 0, void 0, function* () {
        let welcomePg = new welcome_1.welcome;
        protractor_1.browser.sleep(5000);
        welcomePg.welcomeMsg.getText().then(function (text) {
            console.log(text);
        });
        yield expect(welcomePg.welcomeMsg.getText()).toEqual("Welcome!");
        yield welcomePg.welcomeBtn.click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3dlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUVoRCxrREFBK0M7QUFHL0MsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUUsRUFBRTtJQUdqQyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsR0FBTyxFQUFFO1FBRWxDLElBQUksU0FBUyxHQUFHLElBQUksaUJBQU8sQ0FBQTtRQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakUsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBSXZDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9