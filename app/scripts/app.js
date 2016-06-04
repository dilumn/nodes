'use strict';

/**
 * @ngdoc overview
 * @name nodesApp
 * @description
 * # nodesApp
 *
 * Main module of the application.
 */
angular
  .module('nodesApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
