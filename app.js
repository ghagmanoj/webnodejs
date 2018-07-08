angular.module('demoApp', ["controllers", "forceng"])

    .run(function ($window, force) {

// ForceNG is built to work out of the box with sensible defaults.
// Uncomment the force.init() function call below to provide specific runtime parameters
       force.init({
            appId: '3MVG9d8..z.hDcPKehLFieXwPKuG26IEXAKyTVbhXyRNlpWx8RY4SuB2g7m5lq48j0F1DpGcsGPuP4DETtOB0',
			apiVersion: 'v32.0',
			loginUrl: 'https://login.salesforce.com',
			oauthRedirectURL: 'http://localhost:8200/oauthcallback.html',
           // proxyURL: ''
		   proxyURL: 'https://omniproxy.herokuapp.com' 
        });
		
		//// New code added as suggested by Vlocity Support 
	//	force.login().then( 
			//	function (oAuth) { 
			//						$rootScope.showCards = true; 
			//					}); 

			//					});	


    });	