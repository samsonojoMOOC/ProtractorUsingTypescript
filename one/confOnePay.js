exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['loginSpecs.js', 'welcomeSpecs.js', 'answerToSecurityQuestion.js', 'OtpValidation.js', 'loginSuccessful.js','dashboard.js', 'transfer.js']
    
    
};