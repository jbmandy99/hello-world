 
describe('mocking service http call', function() {
beforeEach(module('proposalApp'));
describe('performanceSummaryWithContractNumberController', function() {
  var MainCtrl, $scope;

  describe('with spies', function() {
    beforeEach(inject(function($controller, $rootScope, performanceSummaryService) {
      $scope = $rootScope.$new();

      spyOn(performanceSummaryService, 'performanceSummaryTO').and.callFake(function() {
        return {
          success: function(callback) {
            callback({
              things: 'and stuff'
            })
          }
        
        };
      });

      MainCtrl = $controller('performanceSummaryWithContractNumberController', {
        $scope: $scope,
        performanceSummaryService: performanceSummaryService
      });
    }));

    it('should set data to "things and stuff"', function() {
      expect($scope.user).toEqual({
        things: 'and stuff'
      });
    });

  });
});
});