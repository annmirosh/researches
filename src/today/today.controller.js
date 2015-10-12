(function () {
  angular
    .module('today.controller', [])
    .controller('TodayController', TodayController);

  TodayController.$inject = [ 'IngestionService', 'DateTimeService', '$http' ];

  function TodayController(IngestionService, DateTimeService, $http) {
    this.ingestions = [];
    this.addIngestion = addIngestion;
    this.removeIngestion = removeIngestion;
    this.getTitleIngestion = getTitleIngestion;

    function addIngestion(isSnack) {
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

    function removeIngestion(index) {
      this.ingestions.splice(index, 1);
    }
  }

})();