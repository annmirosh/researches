angular.module('errorHttpInterceptor.factory', [])
  .factory('errorHttpInterceptor', ErrorHttpInterceptor);

ErrorHttpInterceptor.$inject = [ '$q', 'ToasterService' ];

function ErrorHttpInterceptor($q, ToasterService) {
  return {
    responseError: function responseError(rejection) {
      ToasterService.showMessage('Error in reguest to: ' + rejection.config.url);
      return $q.reject(rejection);
    }
  };
}