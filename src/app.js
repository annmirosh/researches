(function () {
  'use strict';
  angular
    .module('app', [
      'ui.router',
      'today.controller',
      'ingestion.service',
      'datetime.service'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
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
    });
})();