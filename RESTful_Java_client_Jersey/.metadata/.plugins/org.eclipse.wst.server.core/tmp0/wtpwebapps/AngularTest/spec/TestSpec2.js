
describe('testing performance summary', function() {
	beforeEach(module("proposalApp"));
	describe('performanceSummaryWithContractNumberController', function() {

		var scope, contr; // , YourControllerHere1;
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			contr = $controller(
					'performanceSummaryWithContractNumberController', {
						$scope : scope
					});
		}));
		
		
		
		it('should create "phones" model with 3 phones', function() {
			expect(scope.messagex).toBe('Hello1');
		});
		it('should create "phones" model with 3 phones', function() {
			expect(contr.thisMessage).toBe('thisMessage');
		});

//		it('The following variables needs to be defined', function() {
// 			// change from var to $scope
//			expect(contr.varMessage).toBeDefined();
//			 
//		});
		
		 
		

	});
});

















// var $scope, $controller; //, YourControllerHere1;
// beforeEach(inject(function($injector) {
//	
// $scope = $injector.get('$rootScope');
// $controller = $injector.get('$controller');
// contr = $controller('performanceSummaryWithContractNumberController',
// {$scope: $scope});
// }));




















































//
//
//describe("YourControllerHere1", function() {
//	var $scope, $controller; //,  YourControllerHere1;
//	beforeEach(module("proposalApp"));
//	beforeEach(inject(function($injector) {
//
//		$scope = $injector.get('$rootScope');
//		$controller = $injector.get('$controller');
//		$controller('YourControllerHere1', {$scope: $scope});
//	}));
//
//	it("YourControllerHere1 $scope.messagex Should say hello1", function() {
//		expect($scope.messagex).toBe("Hello1");
//	});
//}); 
//
//
//describe("performanceSummaryWithContractNumberController" , function() {
//	var $scope, $controller; //,  YourControllerHere1;
//	beforeEach(module("proposalApp"));
//	beforeEach(inject(function($injector) {
//
//		$scope = $injector.get('$rootScope');
//		$controller = $injector.get('$controller');
//		 $controller('performanceSummaryWithContractNumberController', {$scope: $scope});
//	}));
//
//	it("performanceSummaryWithContractNumberController Should say hello1", function() {
//		expect($scope.message1).toBe("Hello1");
//
//	});
//
// 
//	
//	
//}); 
