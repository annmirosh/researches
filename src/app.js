'use strict';

require('angular');
require('angular-ui-router');

module.export = ('today.controller', require('./today/today.controller'));
module.export = ('datetime.service', require('./common/datetime.service'));
module.export = ('ingestion.service', require('./common/ingestion.service'));
module.export = ('errorCatcher.factory', require('./error/errorCatcher.factory'));
module.export = ('errorHttpInterceptor.factory', require('./error/errorHttpInterceptor.factory'));

var app = angular
  .module('app', [
    'ui.router',
    'today.controller',
    'datetime.service',
    'ingestion.service',
    'errorCatcher.factory',
    'errorHttpInterceptor.factory'
  ])
  .config(AjaxCatcherConfig)
  .config(UiRouterConfig);

AjaxCatcherConfig.$inject = [ '$httpProvider' ];
function AjaxCatcherConfig($httpProvider) {
  $httpProvider.interceptors.push('errorHttpInterceptor');
}

UiRouterConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
function UiRouterConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        header: {
          templateUrl: 'header/header.html'
        }
      }
    })
    .state('root.today', {
      url: '/',
      views: {
        'container@': {
          templateUrl: 'today/today.html'
        }
      }
    })
    .state('root.history', {
      url: '/history',
      views: {
        'container@': {
          templateUrl: 'history/history.html'
        }
      }
    });

  // catch all route and send users to the home page
  $urlRouterProvider.otherwise('/');
}

module.exports = app;