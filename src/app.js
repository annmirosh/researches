'use strict';

require('angular');
require('angular-ui-router');

module.export = ('today.controller', require('./today/today.controller'));
module.export = ('datetime.service', require('./common/datetime.service'));
module.export = ('ingestion.service', require('./common/ingestion.service'));

var app = angular
  .module('app', [
    'ui.router',
    'today.controller',
    'datetime.service',
    'ingestion.service'
  ])
  .config(UiRouterConfig);


/*@ngInject*/
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

UiRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = app;