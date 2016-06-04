'use strict';

/**
 * @ngdoc function
 * @name nodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodesApp
 */

 (function (angular) {
  'use strict';
  var nodeController = function (mainService) {
   var vm = this;

  vm.add = function (){
    mainService.addActor();
  };

};

nodeController.$inject = ['mainService'];
angular.module('nodesApp')
.controller('MainCtrl', nodeController);

}(angular));