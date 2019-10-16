import {browser, element, by} from "protractor";
import { async } from "q";
import { dashboard } from "./pageObject/dashboard";

describe('Sterling One Pay --', ()=>{

    it('User should be Welcome to Dashboard', async()=>{
        let dashBrd = new dashboard;
        
        browser.sleep(15000);

        await expect(dashBrd.dashbrd.getText()).toContain('Good Afternoon');

        dashBrd.dashbrd.getText().then(function(text){
            console.log(text);
        })

    })
} )