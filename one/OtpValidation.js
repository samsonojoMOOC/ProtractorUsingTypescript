

describe('Sterling One Pay -- ', function(){

    it('OTP Validation', function(){
       // element(by.xpath("//a[contains(text(),'Try another')]")).click();
        //element(by.id("ans")).sendKeys("test");
        browser.sleep(5000);
       element(by.xpath("//input[@name='OTP']")).sendKeys('123456');
       
        element(by.id('continue-button')).click();
    })
})