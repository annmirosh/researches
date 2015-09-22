angular.module('errorHttpInterceptor.factory', [])
  .factory('errorHttpInterceptor', ErrorHttpInterceptor);

ErrorHttpInterceptor.$inject = [ '$q' ];

function ErrorHttpInterceptor($q) {
  return {
    responseError: function responseError(rejection) {
      Raven.captureException(new Error('HTTP response error'), {
        extra: {
          config: rejection.config,
          status: rejection.status
        }
      });
      return $q.reject(rejection);
    }
  };
}