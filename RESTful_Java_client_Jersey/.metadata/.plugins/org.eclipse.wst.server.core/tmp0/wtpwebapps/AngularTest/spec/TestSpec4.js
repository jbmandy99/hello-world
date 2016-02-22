//describe('mocking service http call', function() {
//beforeEach(module('proposalApp'));
//describe('performanceSummaryWithContractNumberController', function() {
//  var MainCtrl, $scope;
//
//  describe('with spies', function() {
//    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
//      $scope = $rootScope.$new();
//
//      spyOn(performanceSummaryService, 'performanceSummaryTO').and.callFake(function() {
//  
//        return {
//          success: function(callback) {
//            callback({
//              things: 'and stuff'
//            })
//          }
//        };
//       });
//
//      MainCtrl = $controller('performanceSummaryWithContractNumberController', {
//        $scope: $scope,
//        performanceSummaryService: performanceSummaryService
//      });
//    }));
//
//    it('should set data to "things and stuff"', function() {
//      expect($scope.user).toEqual({
//        things: 'and stuff'
//      });
//    });
//
//  });
//});
//});

//describe('mocking service http call', function() {
//	var MainCtrl, $scope;
//	var getResponse = {
//		data : 'this is a mocked response'
//	};
//	var getDeferred;
//	var myServiceMock;
//
//	describe('performanceSummaryWithContractNumberController', function() {
//		beforeEach(module('proposalApp'));
//		// describe('with spies', function() {
//		beforeEach(inject(function($q, $controller, $rootScope,
//				performanceSummaryService, $routeParams) {
//			 $scope = $rootScope.$new();
////			$scope = $rootScope;
//
//			// spyOn(performanceSummaryService,
//			// 'performanceSummaryTO').and.callFake(function() {
//
//			// return {
//			// success: function(callback) {
//			// callback({
//			// things: 'and stuff'
//			// })
//			// }
//			// };
//			// });
//
//			var myServiceMock = {
//				performanceSummaryTO : function() {
//				}
//			};
//
//			// setup a promise for the get
//			var getDeferred = $q.defer();
//			getDeferred.resolve(getResponse);
//			spyOn(myServiceMock, 'performanceSummaryTO').andReturn(
//					getDeferred.promise);
//
//			// controller = $controller('SimpleController', { $scope: scope,
//			// myService: myServiceMock });
//
//			MainCtrl = $controller(
//					'performanceSummaryWithContractNumberController', {
//						$scope : $scope,
//						performanceSummaryService : myServiceMock
//					});
//		}));
//
//		// it('should set data to "things and stuff"', function() {
//		// expect($scope.user).toEqual({
//		// things: 'and stuff'
//		// });
//		// });
//
//		// it('this tests works', function() {
//		// scope.loadData();
//		// expect($scope.user).toEqual(getResponse.data);
//		// });
//
//		it('should set some data on the scope when successful', function() {
//			getDeferred.resolve(getResponse);
//			$scope.loadData();
//			$scope.$apply();
//			expect(myServiceMock.performanceSummaryTO).toHaveBeenCalled();
//			expect($scope.user).toEqual(getResponse.data);
//		});
//
//		// });
//	});
//});

describe('mocking service http call for initial load without any internal proposal number', function() {
    var  pricingPlatformListx = [{value: 'P', label: 'Large Plan' }
    ,{ value: 'L', label: 'Legacy' }
        ,{ value: 'N', label: 'Neutral' }
    ];
    
    it('get object by value setFromDropdown using L giving Legacy object', function(){
        var a = JSON.stringify(setFromDropdown(pricingPlatformListx,'L'));
        var b = '{"value":"L","label":"Legacy"}';
        expect(a).toEqual(b); 
        });
    
    it('get object by value setFromDropdownByLabel using Legacy giving Legacy object', function(){
        var x = JSON.stringify(setFromDropdownByLabel(pricingPlatformListx,'Legacy'));
        var y = '{"value":"L","label":"Legacy"}';
        expect(x).toEqual(y); 
        });
    
});

describe('mocking service http call for initial load without any internal proposal number', function() {
beforeEach(module('proposalApp'));
describe('performanceSummaryWithContractNumberController', function() {
  var MainCtrl,  scope;
   describe('with mocking of default value testing', function() {
    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
       scope = $rootScope.$new();

      spyOn(performanceSummaryService, 'performanceSummaryTO').and.callFake(function() {
  
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





