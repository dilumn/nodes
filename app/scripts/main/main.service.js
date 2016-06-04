(function (angular) {
  'use strict';

  var mainService = function ($http) {

        //To Get all Sections for a Template to show in the Dropdown list on Navigation
        var addActor = function () {
          $http({method: 'GET', url: 'http://127.0.0.1:3001/addNode'}).
          then(function(response) {
            console.log(response)
          }, function(response) {
            
          });
        };


        var service = {
          addActor: addActor
        };

        return service;

      };
      mainService.$inject = ['$http'];

      angular
      .module('nodesApp')
      .factory('mainService', mainService);

    }(angular));