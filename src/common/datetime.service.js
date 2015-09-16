(function () {
  angular
    .module('datetime.service', [])
    .service('DateTimeService', DateTimeService);

  /*@ngInject*/
  function DateTimeService() {
    this.now = now;

    function now() {
      return new Date();
    }
  }
})();