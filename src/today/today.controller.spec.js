(function () {
  'use strict';

  describe('TodayController:', function () {
    var
      dateTimeService = null,
      scope,
      TodayController;

    beforeEach(function () {
      module('app');
    });

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      TodayController = $controller('TodayController', {
        $scope: scope,
      });
    }));

    it('removeIngestion method should remove right element', function () {
      TodayController.ingestions = [ {title: 1}, {title: 2} ];
      TodayController.removeIngestion(0);

      scope.$digest();

      expect(TodayController.ingestions.length).to.equal(1);
      expect(TodayController.ingestions[ 0 ].title).to.equal(2);
    });
  });
})();