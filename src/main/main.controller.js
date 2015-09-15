(function () {
  angular
    .module('main.controller', [])
    .controller('MainController', MainController);

  MainController.$inject = [ 'IngestionService', 'DateTimeService' ];

  function MainController(IngestionService, DateTimeService) {
    this.ingestions = [];
    this.addIngestion = addIngestion;
    this.getTitleIngestion = getTitleIngestion;

    function addIngestion(isSnack) {
      this.ingestions.push(createIngestion(isSnack));
      console.log(this.ingestions)
    }

    function createIngestion(isSnack) {
      return {
        title: getTitleIngestion(isSnack),
        time: DateTimeService.now(),
        foods: []
      }
    }

    function getTitleIngestion(isSnack) {
      return IngestionService.getTitle(isSnack);
    }
  }
})();