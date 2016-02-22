//http://localhost:8080/AngularTest/SpecRunner1.html

 

describe('mocking service http call for initial load without any internal proposal number', function() {
beforeEach(module('proposalApp'));
describe('performanceSummaryWithContractNumberController', function() {
  var MainCtrl,  scope;
   describe('with mocking of default value testing', function() {
    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
       scope = $rootScope.$new();

      spyOn(performanceSummaryService, 'getPerformanceSummaryTO').and.callFake(function() {
  
        return {
          then: function(callback) {
            callback({
            	 "data":{"pricingPlatformList":[{"value":"L","label":"Legacy"},{"value":"N","label":"Neutral"},{"value":"P","label":"Large Plan"}],"contractNumber":"undefined","selectedFundsOnly":"N","performanceMonthDayList":[{"value":"11/01/2016","label":"11/01"},{"value":"10/01/2016","label":"10/01"},{"value":"09/01/2016","label":"09/01"}],"pricingPlatform":"N","performanceYearList":[{"value":"2015","label":"2015"},{"value":"2016","label":"2016"}],"domicileState":"NY","performanceYear":"2016","title":null,"wrap":"0.00","planTypeDB":"No","planNumber":"123456","singer":null,"stateList":[{"value":"NE","label":"NE"},{"value":"NY","label":"NY"}],"wrapList":[{"value":"c0","label":"0.00"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"},{"value":"c5","label":"0.05"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"}],"planName":"Jeff Plan","performanceDate":"10/01/2016"},"status":200,"config":{"method":"POST","transformRequest":[null],"transformResponse":[null],"url":"http://localhost:8080/RESTfulExample/rest/metallica/getPerformanceSummaryTO/undefined","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"OK"
            })
          }
        };
       });

      MainCtrl = $controller('performanceSummaryWithContractNumberController', {
        $scope:  scope,
        performanceSummaryService: performanceSummaryService
      });
    }));

    //after load
    
    it('initial load does not have an internal proposal number as a parameter', function() {
        expect( scope.internalProposalNumber).not.toBeDefined();
      });
    it('initial call to performanceSummaryService.getPerformanceSummaryTO will return something and copy to scope.user', function() {
    	expect(scope.user).not.toBe(null);
      });    
    it('initial load will populate default pricingPlatformList', function() {
      expect( scope.user.pricingPlatformList.length).toBe(3);
      expect( scope.user.pricingPlatformList).toBeDefined();
    });
    it('initial load will populate default stateList', function() {
        expect( scope.user.stateList.length).toBe(2);
        expect( scope.user.stateList).toBeDefined();
      });
    it('initial load will populate default wrapList', function() {
        expect( scope.user.wrapList.length).toBe(6);
        expect( scope.user.wrapList).toBeDefined();
      });   
    
    it('response will be copied to master backup for reset and should be equal', function() {
        expect( scope.user).toEqual(scope.master);
        expect( scope.master).toBeDefined();
      }); 
    it('response error result should be blank', function(){
    	expect( scope.performanceSummaryAppStatus).toBeDefined();
    	expect( scope.performanceSummaryAppStatus).toBe('');
    });
    
  });
});
});



describe('mocking service with bad return from service', function() {
	beforeEach(module('proposalApp'));
	describe('performanceSummaryWithContractNumberController', function() {
	  var MainCtrl,  scope;
	   describe('with mocking of default value testing', function() {
	    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
	       scope = $rootScope.$new();

	      spyOn(performanceSummaryService, 'getPerformanceSummaryTO').and.callFake(function() {
	  
	        return {
	          then: function(callback) {
	            callback({
	            	"data":"<html><head><title>Apache Tomcat/7.0.47 - Error report</title><style><!--H1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}HR {color : #525D76;}--></style> </head><body><h1>HTTP Status 404 - Not Found</h1><HR size=\"1\" noshade=\"noshade\"><p><b>type</b> Status report</p><p><b>message</b> <u>Not Found</u></p><p><b>description</b> <u>The requested resource is not available.</u></p><HR size=\"1\" noshade=\"noshade\"><h3>Apache Tomcat/7.0.47</h3></body></html>","status":404,"config":{"method":"POST","transformRequest":[null],"transformResponse":[null],"url":"http://localhost:8080/RESTfulExample/rest/metallicaxxx/getPerformanceSummaryTO/undefined","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"Not Found"
	            })
	          }
	        };
	       });

	      MainCtrl = $controller('performanceSummaryWithContractNumberController', {
	        $scope:  scope,
	        performanceSummaryService: performanceSummaryService
	      });
	    }));

	    //after load
	    
	    it('service call failed during the initial load and an error message should show', function() {
	        expect( scope.performanceSummaryAppStatus ).toEqual(scope.messageLoadFail);
	      });
	 
	    
	  });
	});
	});


describe('mocking service with a id passed to the service from service', function() {
	beforeEach(module('proposalApp'));
	describe('performanceSummaryWithContractNumberController', function() {
	  var MainCtrl,  scope;
	   describe('with mocking of default value testing', function() {
	    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
	       scope = $rootScope.$new();

	      spyOn(performanceSummaryService, 'getPerformanceSummaryTO').and.callFake(function() {
	  
	        return {
	          then: function(callback) {
	            callback({
	            	"data":{"performanceDate":"10/01/2016","planName":"Jeff Plan","planTypeDB":"No","singer":null,"wrap":"0.00","stateList":[{"value":"NE","label":"NE"},{"value":"NY","label":"NY"}],"title":null,"wrapList":[{"value":"c0","label":"0.00"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"},{"value":"c5","label":"0.05"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"}],"planNumber":"123456","selectedFundsOnly":"N","performanceMonthDayList":[{"value":"11/01/2016","label":"11/01"},{"value":"10/01/2016","label":"10/01"},{"value":"09/01/2016","label":"09/01"}],"performanceYearList":[{"value":"2015","label":"2015"},{"value":"2016","label":"2016"}],"performanceYear":"2016","contractNumber":"12345","pricingPlatform":"N","domicileState":"NY","pricingPlatformList":[{"value":"L","label":"Legacy"},{"value":"N","label":"Neutral"},{"value":"P","label":"Large Plan"}]},"status":200,"config":{"method":"POST","transformRequest":[null],"transformResponse":[null],"url":"http://localhost:8080/RESTfulExample/rest/metallica/getPerformanceSummaryTO/12345","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"OK"
	            })
	          }
	        };
	       });
	      
	      spyOn(performanceSummaryService, 'getPerformanceDateList').and.callFake(function() {
	    	  
		        return {
		          then: function(callback) {
		            callback({
		            	"data":{"performanceDate":"10/01/2015","planName":"Jeff Plan","planTypeDB":"No","singer":null,"wrap":"0.00","stateList":[{"value":"NE","label":"NE"},{"value":"NY","label":"NY"}],"title":null,"wrapList":[{"value":"c0","label":"0.00"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"},{"value":"c5","label":"0.05"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"}],"planNumber":"123456","selectedFundsOnly":"N","performanceMonthDayList":[{"value":"12/01/2015","label":"12/01"},{"value":"11/01/2015","label":"11/01"},{"value":"10/01/2015","label":"10/01"},{"value":"09/01/2015","label":"09/01"}],"performanceYearList":[{"value":"2015","label":"2015"},{"value":"2016","label":"2016"}],"performanceYear":"2016","contractNumber":null,"pricingPlatform":"N","domicileState":"NY","pricingPlatformList":[{"value":"L","label":"Legacy"},{"value":"N","label":"Neutral"},{"value":"P","label":"Large Plan"}]},"status":200,"config":{"method":"POST","transformRequest":[null],"transformResponse":[null],"url":"http://localhost:8080/RESTfulExample/rest/metallica/getPerformanceDateList/2015","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"OK"
		            })
		          }
		        };
		       });

	      MainCtrl = $controller('performanceSummaryWithContractNumberController', {
	        $scope:  scope,
	        performanceSummaryService: performanceSummaryService
	      });
	    }));

	    //after load
	    it('initial load does not have an internal proposal number as a parameter', function() {
		      expect( scope.internalProposalNumber).not.toBeDefined();
		    });
		  it('initial call to performanceSummaryService.getPerformanceSummaryTO will return something and copy to scope.user', function() {
		  	expect(scope.user).not.toBe(null);
		    });    
		  it('initial load will populate default pricingPlatformList', function() {
		    expect( scope.user.pricingPlatformList.length).toBe(3);
		    expect( scope.user.pricingPlatformList).toBeDefined();
		  });
		  it('initial load will populate default stateList', function() {
		      expect( scope.user.stateList.length).toBe(2);
		      expect( scope.user.stateList).toBeDefined();
		    });
		  it('initial load will populate default wrapList', function() {
		      expect( scope.user.wrapList.length).toBe(6);
		      expect( scope.user.wrapList).toBeDefined();
		    });   
		  
		  it('response will be copied to master backup for reset and should be equal', function() {
		      expect( scope.user).toEqual(scope.master);
		      expect( scope.master).toBeDefined();
		    }); 
		  it('response error result should be blank', function(){
		  	expect( scope.performanceSummaryAppStatus).toBeDefined();
		  	expect( scope.performanceSummaryAppStatus).toBe('');
		  });
		  
		  it('planName will be populated with data from service call', function(){
			  	expect( scope.user.planName).toBeDefined();
			  	expect( scope.user.planName).toBe("Jeff Plan");
			  });
		  it('contractNumber will be populated with data from service call', function(){
			  	expect( scope.user.contractNumber).toBeDefined();
			  	expect( scope.user.contractNumber).toBe("12345");
			  });
		  it('planNumber will be populated with data from service call', function(){
			  	expect( scope.user.planNumber).toBeDefined();
			  	expect( scope.user.planNumber).toBe("123456");
			  });		  
		  it('performanceMonthDayList load will populate', function() {
			    expect( scope.user.performanceMonthDayList.length).toBe(3);
			    expect( scope.user.performanceMonthDayList).toBeDefined();
			  });		  
		  it('performanceYearList load will populate', function() {
			    expect( scope.user.performanceYearList.length).toBe(2);
			    expect( scope.user.performanceYearList).toBeDefined();
			  });		
		  it('performanceYear load will populate based on the selected year', function() {
	        var a = JSON.stringify(scope.user.performanceYear);
	        var b = '{"value":"2016","label":"2016"}';        
	        	expect(a).toEqual(b); 
			    expect( scope.user.performanceYear).toBeDefined();
			  });		  
		  it('performanceDate load will populate based on the selected date', function() {
		        var a = JSON.stringify(scope.user.performanceDate);
		        var b = '{"value":"10/01/2016","label":"10/01"}';        
		        	expect(a).toEqual(b); 
				    expect( scope.user.performanceDate).toBeDefined();
				  });	
		  it('domicile state will populate based on the selected state', function() {
		        var a = JSON.stringify(scope.user.domicileState);
		        var b = '{"value":"NY","label":"NY"}';        
		        	expect(a).toEqual(b); 
				    expect( scope.user.domicileState).toBeDefined();
				  });
		  
		  it('change the year and the performanceMonthDayList should populate with the appropriate yerar',function(){
			  scope.user.performanceYear='{"value":"2015","label":"2015"}'
			  scope.changePerformanceYear();
			  var b = '[{"value":"12/01/2015","label":"12/01"},{"value":"11/01/2015","label":"11/01"},{"value":"10/01/2015","label":"10/01"},{"value":"09/01/2015","label":"09/01"}]';
			  var a = JSON.stringify(scope.user.performanceMonthDayList);
			  expect(a).toEqual(b); 
		  });
		  it('reset button should copy master to user form',function(){
			  scope.resetForm();
 			  expect(scope.master).toEqual(scope.user); 
		  });
//		  it('performanceSummaryGeneratePdf button with contract number will pass if nothing is missing and run the customized form',function(){
//			  scope.performanceSummaryGeneratePdf();
// 			  expect(scope.user.contractNumber !== undefined && scope.validationWithContractNumber).toEqual(true); 
//			  expect(scope.performanceSummaryAppStatus).toEqual("");
//		  });	
//		  
//		  it('performanceSummaryGeneratePdf button with missing contract number will pass if nothing is missing and run the default form',function(){
//			  scope.user.contractNumber = undefined;
//			  scope.performanceSummaryGeneratePdf();
// 			  expect(scope.user.contractNumber === undefined && scope.validationDefault).toEqual(true); 
//			  expect(scope.performanceSummaryAppStatus).toEqual("");
//		  });
		  
	  });
	});
	});


 
//describe('mocking service with a id passed to the service from service', function() {
//	beforeEach(module('proposalApp'));
//	describe('performanceSummaryWithContractNumberController', function() {
//	  var MainCtrl,  scope;
//	   describe('with mocking of default value testing', function() {
//	    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
//	       scope = $rootScope.$new();
//
//	      spyOn(performanceSummaryService, 'getPerformanceSummaryTO').and.callFake(function() {
//	  
//	        return {
//	          then: function(callback) {
//	            callback({
//	            	"data":{"performanceDate":"10/01/2016","planName":"Jeff Plan","planTypeDB":"No","singer":null,"wrap":"0.00","stateList":[{"value":"NE","label":"NE"},{"value":"NY","label":"NY"}],"title":null,"wrapList":[{"value":"c0","label":"0.00"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"},{"value":"c5","label":"0.05"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"}],"planNumber":"123456","selectedFundsOnly":"N","performanceMonthDayList":[{"value":"11/01/2016","label":"11/01"},{"value":"10/01/2016","label":"10/01"},{"value":"09/01/2016","label":"09/01"}],"performanceYearList":[{"value":"2015","label":"2015"},{"value":"2016","label":"2016"}],"performanceYear":"2016","contractNumber":"12345","pricingPlatform":"N","domicileState":"NY","pricingPlatformList":[{"value":"L","label":"Legacy"},{"value":"N","label":"Neutral"},{"value":"P","label":"Large Plan"}]},"status":200,"config":{"method":"POST","transformRequest":[null],"transformResponse":[null],"url":"http://localhost:8080/RESTfulExample/rest/metallica/getPerformanceSummaryTO/12345","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"OK"
//	            })
//	          }
//	        };
//	       });
//	      
//	      spyOn(performanceSummaryService, 'getWindowLocationHref').and.callFake(function() {
//	    	  
//		        return {
////		          then: function(callback) {
////		            callback({
////		            	"data":{"performanceDate":"10/01/2015","planName":"Jeff Plan","planTypeDB":"No","singer":null,"wrap":"0.00","stateList":[{"value":"NE","label":"NE"},{"value":"NY","label":"NY"}],"title":null,"wrapList":[{"value":"c0","label":"0.00"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"},{"value":"c5","label":"0.05"},{"value":"c15","label":"0.15"},{"value":"c25","label":"0.25"}],"planNumber":"123456","selectedFundsOnly":"N","performanceMonthDayList":[{"value":"12/01/2015","label":"12/01"},{"value":"11/01/2015","label":"11/01"},{"value":"10/01/2015","label":"10/01"},{"value":"09/01/2015","label":"09/01"}],"performanceYearList":[{"value":"2015","label":"2015"},{"value":"2016","label":"2016"}],"performanceYear":"2016","contractNumber":null,"pricingPlatform":"N","domicileState":"NY","pricingPlatformList":[{"value":"L","label":"Legacy"},{"value":"N","label":"Neutral"},{"value":"P","label":"Large Plan"}]},"status":200,"config":{"method":"POST","transformRequest":[null],"transformResponse":[null],"url":"http://localhost:8080/RESTfulExample/rest/metallica/getPerformanceDateList/2015","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"OK"
////		            })
////		          }
//		        };
//		       });
//
//	      MainCtrl = $controller('performanceSummaryWithContractNumberController', {
//	        $scope:  scope,
//	        performanceSummaryService: performanceSummaryService
//	      });
//	    }));
//
//	     
//		  it('performanceSummaryGeneratePdf button with contract number will pass if nothing is missing and run the customized form',function(){
//			  scope.performanceSummaryGeneratePdf();
// 			  expect(scope.user.contractNumber !== undefined && scope.validationWithContractNumber).toEqual(true); 
//			  expect(scope.performanceSummaryAppStatus).toEqual("");
//			  expect(MainCtrl.windowLocationHref).not.toEqual("");
//		  });	
// 
//		  
//	  });
//	});
//	});


 


 