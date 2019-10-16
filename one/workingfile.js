
describe('Chain locator', function(){

    function Calc(a, b, c){
        element(by.model('first')).sendKeys(a);
        /*element(by.model('operator')).element(by.css('option:nth-child(1)')).click();*/
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(values){

                if(values==c){
                    item.click();
                }
                
            })
        
        })

        element(by.id('gobutton')).click();
    }

    it('first test', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

    Calc(3,5, "MULTIPLICATION");
    Calc(3,5, "DIVISION");
    Calc(3,5, "DIVISION");
    Calc(10,9, "ADDITION");

    element.all(by.repeater('result in memory')).each(function(item){
        item.element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log('The value in the table: '+text);

        })
    })



   })
})
