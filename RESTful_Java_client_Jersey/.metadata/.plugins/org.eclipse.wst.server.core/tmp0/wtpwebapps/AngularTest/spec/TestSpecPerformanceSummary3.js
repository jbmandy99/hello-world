//http://localhost:8080/AngularTest/SpecRunner1.html
 describe("YourControllerHere1", function() {
	var $scope, $controller; //,  YourControllerHere1;
	beforeEach(module("proposalApp"));
	beforeEach(inject(function($injector) {

		$scope = $injector.get('$rootScope');
		$controller = $injector.get('$controller');
		$controller('YourControllerHere1', {$scope: $scope});
	}));

	it("YourControllerHere1 $scope.messagex Should say hello1", function() {
		expect($scope.messagex).toBe("Hello1");
	});
}); 
 
describe('mocking underscore js', function() {
    var  pricingPlatformListx = [{value: 'P', label: 'Large Plan' }
    ,{ value: 'L', label: 'Legacy' }
        ,{ value: 'N', label: 'Neutral' }
    ];
    
    it('get object by value setFromDropdown using L giving Legacy object', function(){
        var a = JSON.stringify(setFromDropdown(pricingPlatformListx,'L'));
        var b = '{"value":"L","label":"Legacy"}';
        expect(a).toEqual(b); 
        });
    
    it('get object by value setFromDropdown using empty string giving the same result', function(){
        var a = JSON.stringify(setFromDropdown(pricingPlatformListx,''));
        var b = '""';
        expect(a).toEqual(b); 
        });
    
    it('get object by value setFromDropdownByLabel using Legacy giving Legacy object', function(){
        var x = JSON.stringify(setFromDropdownByLabel(pricingPlatformListx,'Legacy'));
        var y = '{"value":"L","label":"Legacy"}';
        expect(x).toEqual(y); 
        });
    
    it('get object by value setFromDropdownByLabel using empty string giving the same result', function(){
        var a = JSON.stringify(setFromDropdownByLabel(pricingPlatformListx,''));
        var b = '""';
        expect(a).toEqual(b); 
        });
    
});

 

 


 