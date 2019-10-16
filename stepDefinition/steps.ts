import { Given, When, Then } from "cucumber";
import { async } from "q";
import { calculator } from "../pageObject/calculator";
import { browser } from "protractor";
let calc = new calculator;

         Given('I will navigate to {string} page', async (string)=> {
          // Write code here that turns the phrase above into concrete actions
          if(string == "Calc")
          {
            await browser.get('http://juliemr.github.io/protractor-demo/');
          } 
          else if(string == "Angularjs")
          {
            await browser.get('http://angularjs.org');
          }
        });


         When('I add two numbers {string} and {string}',  async(string, string2)=> {
            // Write code here that turns the phrase above into concrete actions
            await calc.firstEditBox.sendKeys(string);
            await calc.secondEditBox.sendKeys(string2);
          });


          Then('The output should be {string}',  async(string)=> {
            // Write code here that turns the phrase above into concrete actions
            await calc.goButton.click();
            await calc.getResult.getText().then(function(text){
                console.log('This is the: '+text);
            })
          });

