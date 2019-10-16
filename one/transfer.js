
describe('Sterling One Pay --', function(){

 
    it('User should be Welcome to Dashboard', function(){
        browser.sleep(12000);

        element(by.xpath("//div[@id='sidebar-nav']//span[text()='Transfers']")).click();
        element(by.xpath("//span[text()='Domestic Transfers']")).click();

        //element(by.xpath("//a[contains(@class, 'content-card bordered action-btn') and contains(@href, '/app/transfers') and contains(@style, 'background-color')]")).click();

        //element(by.xpath("//span[text()='New Transfers']")).click();

 

    })
} )