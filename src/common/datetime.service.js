(function () {
  angular
    .module('datetime.service', [])
    .service('DateTimeService', DateTimeService);

  function DateTimeService() {
    this.now = now;

    function now() {
      return new Date();
    }
  }
})();