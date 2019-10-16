import {browser, element, by} from "protractor";
import { async } from "q";
import { loginSuccessful } from "./pageObject/loginSuccessful";



describe('Sterling One Pay -- ', ()=>{

    it('Login successfully', async()=>{
        let loginSuccess = new loginSuccessful;
        browser.sleep(8000);
        await  expect(loginSuccess.successMessage.getText()).toEqual("You're In!");
        await loginSuccess.successBtn.click();
    })
})