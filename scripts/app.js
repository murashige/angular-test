'use strict';

angular
  .module('angularTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/efo', {
        templateUrl: 'views/efo.html',
        controller: 'EfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
