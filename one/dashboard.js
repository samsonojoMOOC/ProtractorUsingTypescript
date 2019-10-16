
describe('Sterling One Pay --', function(){
    it('User should be Welcome to Dashboard', function(){
        browser.sleep(15000);

        expect(element(by.xpath("//p[@class=' welcome-msg']")).getText()).toContain('Good Afternoon');

        element(by.xpath("//p[@class=' welcome-msg']")).getText().then(function(text){
            console.log(text);
        })

    })
} )