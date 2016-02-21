//describe('PhoneListCtrl', function(){

//beforeEach(angular.mock.module('phonecatApp'));

//it('should create "phones" model with 3 phones', inject(function($controller) {
//var scope = {},
//ctrl = $controller('PhoneListCtrl', {$scope:scope});

//expect(scope.phones.length).toBe(3);
//}));

//});

//describe('PhoneListCtrl', function(){

//it('should create "phones" model with 3 phones', function() {
//var scope = {},
//ctrl = new PhoneListCtrl(scope);

//expect(scope.phones.length).toBe(3);
//});

//});

//describe('PhoneListCtrl', function() {
//var $scope;
//var controller;

//beforeEach(function() {

//module("phonecatApp");

//inject(function(_$rootScope_, $controller) {

//$scope = _$rootScope_.$new();
//controller = $controller("PhoneListCtrl", {
//$scope : $scope
//});

//});

//});

//it('should create "phones" model with 3 phones', function() {
//var scope = {}, ctrl = new PhoneListCtrl(scope);

//expect(scope.phones.length).toBe(3);
//});


// describe('$scope.grade', function() {
// it('sets the strength to "strong" if the password length is >8
// chars', function() {
// var $scope = {};
// var controller = $controller('PasswordController', { $scope: $scope
// });
// $scope.password = 'longerthaneightchars';
// $scope.grade();
// expect($scope.strength).toEqual('strong');
// });
//});






describe("YourControllerHere", function() {
	var $scope, $controller, YourControllerHere;
	beforeEach(module("phonecatApp"));
	beforeEach(inject(function($injector) {

		$scope = $injector.get('$rootScope');
		$controller = $injector.get('$controller');
		YourControllerHere = $controller('YourControllerHere', {$scope: $scope});
	}));
	it("Should say hello1", function() {
		expect(YourControllerHere.thisMessage).toBe("Hello");
	});
});




 







//describe("YourControllerHere", function() {
//	var $scope;
//	var controller;
//
//	beforeEach(function() {
//
//		module("phonecatApp");
//
//		inject(function(_$rootScope_, $controller) {
//
//			$scope = _$rootScope_.$new();
//			controller = $controller("YourControllerHere", {$scope: $scope});
//
//		});
//
//	});
//
//	it("Should say hello", function() {
//		expect(controller.message).toBe("Hello");
//		expect(controller.message).toBeDefined();
//	});
//
//});
//describe("YourControllerHere", function() {
//	var $rootScope;
//	var $controller;
//	beforeEach(module("phonecatApp"));
//	beforeEach(inject(function($injector) {
//
//		$rootScope = $injector.get('$rootScope');
//		$controller = $injector.get('$controller');
//		$scope = $rootScope.$new();
//
//	}));
//	beforeEach(inject(function($controller) {
//		YourControllerHere = $controller("YourControllerHere");
//
//	}));
//
//	it("Should say hello", function() {
//		expect(YourControllerHere.message).toBe("Hello");
//	});
//
//});
//
//
//
//describe('PhoneListCtrl', function(){
//	var $scope, $controller;
//	beforeEach(angular.mock.module('phonecatApp'));
//	beforeEach(inject(function($injector) {
//		$scope = $injector.get('$rootScope');
//		$controller = $injector.get('$controller');
//	}));
//
//	it('should create "phones" model with 3 phones', inject(function($controller) {
//		var scope = {},
//		ctrl = $controller('PhoneListCtrl', {$scope:scope});
//		expect(scope.phones.length).toBe(3);
//	}));
//
//});
//
//describe("YourControllerHere1", function() {
//	var $scope, $controller, YourControllerHere1;
//	beforeEach(module("phonecatApp"));
//	beforeEach(inject(function($injector) {
//
//		$scope = $injector.get('$rootScope');
//		$controller = $injector.get('$controller');
//		YourControllerHere1 = $controller('YourControllerHere1', {$scope: $scope});
//	}));
//	it("Should say hello1", function() {
//		expect($scope.message1).toBe("Hello1");
//	});
//});
//
//describe("YourControllerHere1", function() {
//	var $scope, $controller; //,  YourControllerHere1;
//	beforeEach(module("phonecatApp"));
//	beforeEach(inject(function($injector) {
//
//		$scope = $injector.get('$rootScope');
//		$controller = $injector.get('$controller');
//		$controller('YourControllerHere1', {$scope: $scope});
//	}));
//
//	it("Should say hello1", function() {
//		expect($scope.message1).toBe("Hello1");
//	});
//}); 


 


