describe('Sterling One Pay -- ', function(){

    
    it('Verify Welcome message', function(){
        browser.sleep(5000);

        element(by.className("success-message")).getText().then(function(text){
            console.log(text);
        })

        expect(element(by.className("success-message")).getText()).toEqual("Welcome!");

        element(by.id("reset-button")).click();



    })
})

  