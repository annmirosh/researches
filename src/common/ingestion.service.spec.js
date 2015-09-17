(function () {
  'use strict';

  describe('IngestionService:', function () {
    var ingestionService = null,
      dateTimeService = null;

    beforeEach(function () {
      module('app');
      module('ingestion.service');
    });

    beforeEach(inject(function (_IngestionService_, _DateTimeService_) {
      ingestionService = _IngestionService_;
      dateTimeService = sinon.stub(_DateTimeService_);
    }));

    it('should have getTitle() method', function () {
      expect(ingestionService.getTitle).to.exist;
    });

    describe('should return right ingestion title depends on time ', function () {
      it('(04-00: dinner time)', function () {
        dateTimeService.now.returns(new Date(2011, 9, 1, 4, 0, 0));
        expect(ingestionService.getTitle()).to.equal('dinner');
      });

      it('(06-00: breakfast time)', function () {
        dateTimeService.now.returns(new Date(2011, 9, 1, 6, 0, 0));
        expect(ingestionService.getTitle()).to.equal('breakfast');
      });

      it('(14-00: lunch time)', function () {
        dateTimeService.now.returns(new Date(2011, 9, 1, 14, 0, 0));
        expect(ingestionService.getTitle()).to.equal('lunch');
      });

      it('(17-00 dinner time)', function () {
        dateTimeService.now.returns(new Date(2011, 9, 1, 17, 0, 0));
        expect(ingestionService.getTitle()).to.equal('dinner');
      });

      it('(23-39 dinner time)', function () {
        dateTimeService.now.returns(new Date(2011, 9, 1, 23, 39, 0));
        expect(ingestionService.getTitle()).to.equal('dinner');
      });
    });
  });
})();