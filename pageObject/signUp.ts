import { ElementFinder, element, by } from "protractor";

export class signUp{

    initialElement:ElementFinder;
    signUpLink:ElementFinder;
    withoutSterlingCardBtn:ElementFinder;
    bvnText:ElementFinder;
    firstNameText:ElementFinder;
    lastNameText:ElementFinder;
    birthDate:ElementFinder;
    
    continueBtn:ElementFinder;
    genderMale:ElementFinder;
    genderFemale:ElementFinder;
    titleDrd:ElementFinder;
    selectTheValue:ElementFinder;
    continueGenderBtn:ElementFinder;
    mobileNumberText:ElementFinder;
    emailText:ElementFinder;
    homeAddressText:ElementFinder;
    //continueGenderBtn:ElementFinder;
    referrerCode:ElementFinder;
    //continueGenderBtn:ElementFinder;

    constructor(){

        this.initialElement = element(by.xpath("//div[@class='close-button-modal color-primary']"));
        this.signUpLink = element(by.xpath("//a[text()='Sign Up']"));
        this.withoutSterlingCardBtn = element(by.xpath("//p[contains(text(),'I don’t have a Sterling Bank Account')]"));
        this.bvnText = element(by.id("accountNumber"));
        this.firstNameText = element(by.id("firstName"));
        this.lastNameText = element(by.id("lastName"));
        this.birthDate = element(by.xpath("//input[@placeholder='Date Of Birth*']"));
        
        

        this.continueBtn = element(by.id("continue-button"));
        this.genderMale = element(by.id("gender-m"));
        this.genderFemale = element(by.id("gender-f"));
        this.titleDrd = element(by.tagName("select#sel-title"))
        this.selectTheValue = element(by.css("#sel-title [value='1: Object']"));  //element(by.css("#first [value='Yahoo']")).click();
        this.continueGenderBtn = element(by.xpath("//span[text()='Continue']"));
        this.mobileNumberText = element(by.id("mobileNumber"));
        this.emailText = element(by.id("email"));
        this.homeAddressText = element(by.name("narration"));
        this.referrerCode = element(by.id("refCode"));
       
        


        





    }
}