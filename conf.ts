import {Config} from "protractor";


export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    //specs: ['login.js','dashboard.js', /*'transfer.js', */'transferLater.js'],
    specs: ['login.js','welcome.js', 'answerToSecurityQuestion.js','OtpValidation.js','loginSuccessful.js','dashboard.js', 'transfer.js', 'transferLater.js'],
    //specs: ['signUp.js','createProfile.js'],
    //specs: ['signUpWithAcct.js'],
   
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };
  