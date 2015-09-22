angular.module('errorCatcher.factory', [])
  .factory('$exceptionHandler', [ '$injector', function ($injector) {

    var ToasterService;

    return function (exception, cause) {
      ToasterService = ToasterService || $injector.get('ToasterService');
      console.log('my error');
      console.log(exception.stack);
      ToasterService.showMessage(exception.stack);
    };
  } ]);