var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
phonecatApp.controller('YourControllerHere', function() {

    this.thisMessage = "Hello";

});

phonecatApp.controller('YourControllerHere1', function($scope) {

	$scope.message1 = "Hello1";

});
phonecatApp.controller('PasswordController', function PasswordController($scope) {
	  $scope.password = '';
	  $scope.grade = function() {
	    var size = $scope.password.length;
	    if (size > 8) {
	      $scope.strength = 'strong';
	    } else if (size > 3) {
	      $scope.strength = 'medium';
	    } else {
	      $scope.strength = 'weak';
	    }
	  };
	});