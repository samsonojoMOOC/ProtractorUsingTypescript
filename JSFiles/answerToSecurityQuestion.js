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
describe('Sterling One Pay -- ', () => {
    function clickQuestion() {
        for (var i = 0; i < 20; i++) {
            protractor_1.browser.sleep(8000);
            protractor_1.browser.wait(protractor_1.protractor.until.elementLocated(protractor_1.by.tagName("label")));
            protractor_1.element(protractor_1.by.tagName("label")).getText().then(function (text) {
                console.log(text);
                if (text == "What is your mother's maiden name?") {
                    // browser.wait(EC.visibilityOf(element(by.xpath("//input[@name='Answer']")),5000));
                    protractor_1.element(protractor_1.by.xpath("//input[@name='Answer']")).sendKeys('test');
                    protractor_1.element(protractor_1.by.id('reset-button')).click();
                }
                else {
                    protractor_1.browser.wait(protractor_1.protractor.until.elementLocated(protractor_1.by.xpath("//a[contains(text(),'Try another question?')]")));
                    // browser.wait(EC.elementToBeClickable(element(by.xpath("//a[contains(text(),'Try another question?')]")),5000));
                    protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Try another question?')]")).click();
                    //text = element(by.tagName('label')).getText();
                }
            });
        }
    }
    it('Answer to Security Question', () => __awaiter(this, void 0, void 0, function* () {
        yield clickQuestion();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVG9TZWN1cml0eVF1ZXN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYW5zd2VyVG9TZWN1cml0eVF1ZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEQ7QUFHNUQsUUFBUSxDQUFDLHNCQUFzQixFQUFHLEdBQUUsRUFBRTtJQUVsQyxTQUFTLGFBQWE7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQixvQkFBTyxDQUFDLElBQUksQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0Qsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEIsSUFBSSxJQUFJLElBQUksb0NBQW9DLEVBQUU7b0JBQzlDLG9GQUFvRjtvQkFDcEYsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlELG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUUxQztxQkFBTTtvQkFDSCxvQkFBTyxDQUFDLElBQUksQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekcsa0hBQWtIO29CQUNsSCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMzRSxnREFBZ0Q7aUJBRW5EO1lBRUQsQ0FBQyxDQUFDLENBQUE7U0FFTDtJQUNMLENBQUM7SUFHTCxFQUFFLENBQUMsNkJBQTZCLEVBQUcsR0FBTyxFQUFFO1FBRXhDLE1BQU0sYUFBYSxFQUFFLENBQUM7SUFFMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=