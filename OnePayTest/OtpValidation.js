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
const OtpValidation_1 = require("./pageObject/OtpValidation");
describe('Sterling One Pay -- ', () => {
    it('OTP Validation', () => __awaiter(this, void 0, void 0, function* () {
        let otpValid = new OtpValidation_1.otpValidate;
        // element(by.xpath("//a[contains(text(),'Try another')]")).click();
        //element(by.id("ans")).sendKeys("test");
        protractor_1.browser.sleep(5000);
        yield otpValid.otpText.sendKeys('1234');
        yield otpValid.submitBtn.click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3RwVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL090cFZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUNoRCw4REFBeUQ7QUFHekQsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUUsRUFBRTtJQUVqQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBTyxFQUFFO1FBQzFCLElBQUksUUFBUSxHQUFHLElBQUksMkJBQVcsQ0FBQztRQUNoQyxvRUFBb0U7UUFDbkUseUNBQXlDO1FBQ3pDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkMsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9