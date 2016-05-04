(function() {
  'use strict';
  angular.module('module.controller.header', [])
    .controller('controllerHeader', controllerHeader); 

    controllerHeader.$inject=[
    	'$scope',
      '$state',
      '$mdDialog'
    ];

    function controllerHeader($scope, $state, $mdDialog) {
      
      $scope.openMenu = function($mdOpenMenu, ev) {
        var originatorEv = ev;
        $mdOpenMenu(ev);
      };
     
    	
    }
    
})();