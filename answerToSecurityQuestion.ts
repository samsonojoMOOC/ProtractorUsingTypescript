import {browser, element, by, protractor} from "protractor";
import { async } from "q";

describe('Sterling One Pay -- ',  ()=> {

    function clickQuestion() {

        for (var i = 0; i < 20; i++) {
            browser.sleep(8000);

            browser.wait(protractor.until.elementLocated(by.tagName("label")));
                element(by.tagName("label")).getText().then(function(text){
                    console.log(text);

                if (text == "What is your mother's maiden name?") {
                    // browser.wait(EC.visibilityOf(element(by.xpath("//input[@name='Answer']")),5000));
                    element(by.xpath("//input[@name='Answer']")).sendKeys('test');
                    element(by.id('reset-button')).click();
    
                } else {
                    browser.wait(protractor.until.elementLocated(by.xpath("//a[contains(text(),'Try another question?')]")));
                    // browser.wait(EC.elementToBeClickable(element(by.xpath("//a[contains(text(),'Try another question?')]")),5000));
                    element(by.xpath("//a[contains(text(),'Try another question?')]")).click();
                    //text = element(by.tagName('label')).getText();
    
                }

                })
                
            }
        }
        

    it('Answer to Security Question',  async()=> {

        await clickQuestion();

    })
})