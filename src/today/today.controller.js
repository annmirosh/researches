(function () {
  angular
    .module('today.controller', [])
    .controller('TodayController', TodayController);

  TodayController.$inject = [ 'IngestionService', 'DateTimeService', '$http' ];

  function TodayController(IngestionService, DateTimeService, $http) {
    this.ingestions = [];
    this.addIngestion = addIngestion;
    this.getTitleIngestion = getTitleIngestion;

    function addIngestion(isSnack) {

      if ( isSnack ) {
        $http.get('someUrl');
      } else {
        var f = null;
        f.k++;
      }

      this.ingestions.push(createIngestion(isSnack));
      console.log(this.ingestions);
    }

    function createIngestion(isSnack) {
      return {
        title: getTitleIngestion(isSnack),
        time: DateTimeService.now(),
        foods: []
      };
    }

    function getTitleIngestion(isSnack) {
      return IngestionService.getTitle(isSnack);
    }
  }

})();