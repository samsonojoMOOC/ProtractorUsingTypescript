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
const login_1 = require("./pageObject/login");
describe('Sterling One Pay -- ', () => {
    it('User should be able to Login', () => __awaiter(this, void 0, void 0, function* () {
        let loginPage = new login_1.login;
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://104.42.70.106:4203/login');
        yield protractor_1.browser.driver.manage().window().maximize();
        yield loginPage.initialElement.click();
        yield loginPage.userNameText.sendKeys("niffles001");
        yield loginPage.passwordText.sendKeys("password");
        protractor_1.browser.sleep(2000);
        yield loginPage.loginBtn.click();
        //browser.actions().click(element(by.xpath("//span[text()='Login']"))).perform();
        //browser.sleep(10000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBRWhELDhDQUF5QztBQUl6QyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRSxFQUFFO0lBRWpDLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFPLEVBQUU7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxhQUFLLENBQUM7UUFFMUIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNyRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxELE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELE1BQU0sU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLGlGQUFpRjtRQUNqRix1QkFBdUI7SUFHM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUtQLENBQUMsQ0FBQyxDQUFBIn0=