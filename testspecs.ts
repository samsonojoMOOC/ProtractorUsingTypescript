import {browser} from "protractor";
import {element, by} from "protractor";
import { async } from "q";
import { calculator } from "./pageObject/calculator";
import { angularHomePage } from "./pageObject/angularHomePage";

describe('Chain locator', ()=>{

    it('first test', async()=> {
        let calc = new calculator;

       await browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstEditBox.sendKeys('823');
        await calc.secondEditBox.sendKeys('6');
        await calc.goButton.click();
        calc.getResult.getText().then(function(text){
            console.log('This is the: '+text);

        })
    })

    it('Angular home page', async()=> {
        let angularPg = new angularHomePage;
        await browser.get('http://angularjs.org');
        await angularPg.firstLink.click();
        await angularPg.secondLink.sendKeys();

    })

})