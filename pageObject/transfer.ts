
import { ElementFinder, element, by } from "protractor";

export class transfers{

    transferLink:ElementFinder;
    newTransferLink:ElementFinder;
    otherBanksInstantRadioBtn:ElementFinder;
    otherBanksNeftRadioBtn:ElementFinder;
    mobileWalletRadioBtn:ElementFinder;
    fromAccount:ElementFinder;
    selectBeneficiaryBtn:ElementFinder;
    selectBeneficiary:ElementFinder;

    toAccount:ElementFinder;
    amount:ElementFinder;
    narationText:ElementFinder;
    continueBtn:ElementFinder;
    continueBtnModal:ElementFinder;
    otpText:ElementFinder;
    transferLater:ElementFinder;
    transferLaterStartDate:ElementFinder;
    transferRepeat:ElementFinder;
    transferRepeatStartDate:ElementFinder;
    transferRepeatEndDate:ElementFinder;
    transferRepeatScheduleTime:ElementFinder;
    transferRepeatScheduleFrequency:ElementFinder;

    
   
    constructor(){


        this.transferLink = element(by.xpath("//app-dashboard/section[2]/div[1]/div[2]/div[1]/div/div[1]/a/span"));
        this.newTransferLink = element(by.xpath("//app-transfer-overview/section/div[1]/div[1]/div/div[2]/a/span"));
        this.otherBanksInstantRadioBtn = element(by.id("2"));
        this.otherBanksNeftRadioBtn = element(by.id("3"));
        this.mobileWalletRadioBtn = element(by.id("4"));


        this.fromAccount = element(by.id("from-acct")).element(by.css("option:nth-child(2)"));
        this.selectBeneficiaryBtn = element(by.xpath("//*[@id='ngb-tab-10-panel']//span[text()='Select beneficiary']"));
        this.selectBeneficiary = element(by.xpath("//*[@id=myModal']//app-select-beneficiary/div/div[2]/div/div[1]/div/div/div/div/p[1]"));
        this.toAccount = element(by.id("sinkAccount"));
        this.amount = element(by.id("amount"));
        this.narationText = element(by.name("narration"));
        this.continueBtn = element(by.xpath("//span[text()='Continue']"));
        this.continueBtnModal = element(by.xpath("//*[@id='myModal']//span[text()='Continue']"));
        this.otpText = element(by.name("otp"));

        this.transferLater = element(by.xpath("//label[text()='Later']"));
        this.transferLaterStartDate = element(by.name("later-start"));
        this.transferRepeat = element(by.xpath("//label[text()='Repeating']"));
        this.transferRepeatStartDate = element(by.name("repeat-start"));
        this.transferRepeatEndDate = element(by.name("repeat-end"));
        this.transferRepeatScheduleTime = element(by.name("time-picker"));
        this.transferRepeatScheduleFrequency = element(by.id("freq")).element(by.css("option:nth-child(2)"));









        


        
        

    }
}