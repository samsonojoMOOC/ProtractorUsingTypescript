"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class transfers {
    constructor() {
        this.transferLink = protractor_1.element(protractor_1.by.xpath("//app-dashboard/section[2]/div[1]/div[2]/div[1]/div/div[1]/a/span"));
        this.newTransferLink = protractor_1.element(protractor_1.by.xpath("//app-transfer-overview/section/div[1]/div[1]/div/div[2]/a/span"));
        this.otherBanksInstantRadioBtn = protractor_1.element(protractor_1.by.id("2"));
        this.otherBanksNeftRadioBtn = protractor_1.element(protractor_1.by.id("3"));
        this.mobileWalletRadioBtn = protractor_1.element(protractor_1.by.id("4"));
        this.fromAccount = protractor_1.element(protractor_1.by.id("from-acct")).element(protractor_1.by.css("option:nth-child(2)"));
        this.selectBeneficiaryBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='ngb-tab-10-panel']//span[text()='Select beneficiary']"));
        this.selectBeneficiary = protractor_1.element(protractor_1.by.xpath("//*[@id=myModal']//app-select-beneficiary/div/div[2]/div/div[1]/div/div/div/div/p[1]"));
        this.toAccount = protractor_1.element(protractor_1.by.id("sinkAccount"));
        this.amount = protractor_1.element(protractor_1.by.id("amount"));
        this.narationText = protractor_1.element(protractor_1.by.name("narration"));
        this.continueBtn = protractor_1.element(protractor_1.by.xpath("//span[text()='Continue']"));
        this.continueBtnModal = protractor_1.element(protractor_1.by.xpath("//*[@id='myModal']//span[text()='Continue']"));
        this.otpText = protractor_1.element(protractor_1.by.name("otp"));
        this.transferLater = protractor_1.element(protractor_1.by.xpath("//label[text()='Later']"));
        this.transferLaterStartDate = protractor_1.element(protractor_1.by.name("later-start"));
        this.transferRepeat = protractor_1.element(protractor_1.by.xpath("//label[text()='Repeating']"));
        this.transferRepeatStartDate = protractor_1.element(protractor_1.by.name("repeat-start"));
        this.transferRepeatEndDate = protractor_1.element(protractor_1.by.name("repeat-end"));
        this.transferRepeatScheduleTime = protractor_1.element(protractor_1.by.name("time-picker"));
        this.transferRepeatScheduleFrequency = protractor_1.element(protractor_1.by.id("freq")).element(protractor_1.by.css("option:nth-child(2)"));
    }
}
exports.transfers = transfers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L3RyYW5zZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXdEO0FBRXhELE1BQWEsU0FBUztJQTJCbEI7UUFHSSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxDQUFDO1FBQ2hILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0ZBQXNGLENBQUMsQ0FBQyxDQUFDO1FBQ25JLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLDBCQUEwQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQywrQkFBK0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFnQnpHLENBQUM7Q0FDSjtBQXRFRCw4QkFzRUMifQ==