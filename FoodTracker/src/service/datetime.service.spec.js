(function () {
  'use strict';

  describe('DateTimeService:', function () {
    var
      dateTimeService = null;

    beforeEach(function () {
      module('app');
      module('datetime.service');
    });

    beforeEach(inject(function (_DateTimeService_) {
      dateTimeService = _DateTimeService_;
    }));

    it('should have now() method', function () {
      expect(dateTimeService.now).to.exist;
    });
  });
})();