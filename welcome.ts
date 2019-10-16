import {browser, element, by} from "protractor";
import { async } from "q";
import { welcome } from "./pageObject/welcome";


describe('Sterling One Pay -- ', ()=>{

    
    it('Verify Welcome message', async()=>{

        let welcomePg = new welcome
        browser.sleep(5000);

        welcomePg.welcomeMsg.getText().then(function(text){
            console.log(text);
        })

        await expect(welcomePg.welcomeMsg.getText()).toEqual("Welcome!");

        await welcomePg.welcomeBtn.click();



    })
})

  