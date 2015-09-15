(function () {
  angular
    .module('ingestion.service', [])
    .service('IngestionService', IngestionService);

  IngestionService.$inject = [ 'DateTimeService' ];
  function IngestionService(DateTimeService) {
    this.getTitle = getTitle;

    function getTitle(isSnack) {
      var hours = DateTimeService.now().getHours();

      if ( isSnack ) {
        return 'snack';
      }

      if ( hours >= 5 && hours < 12 ) {
        return 'breakfast';
      }
      if ( hours >= 12 && hours < 16 ) {
        return 'lunch';
      }
      if ( (hours >= 16 && hours < 23) || (hours >= 0 && hours < 5) ) {
        return 'dinner';
      }
    }
  }
})();