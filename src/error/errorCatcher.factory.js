angular.module('errorCatcher.factory', [])
  .factory('$exceptionHandler', function () {
    return function errorCatcherHandler(exception, cause) {
      console.log('my error');
      console.log(exception.stack);
    };
  });