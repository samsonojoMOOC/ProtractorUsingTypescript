

describe('Sterling One Pay -- ', function(){

    it('Login successfully', function(){
        browser.sleep(8000);
        expect(element(by.className('success-message')).getText()).toEqual("You're In!");
        element(by.className('btn btn-primary')).click();
    })
})