(function() {
  'use strict';
  angular.module('module.controller.voteResult', [])
    .config(function($stateProvider){
      $stateProvider.state('voteResult', {
          parent: 'root',
          url: "/voteResult",
          templateUrl: "views/voteResult.html",
          controller: "controller.voteResult"
      });
    })
    .controller('controller.voteResult', controllerResult); 

      controllerResult.$inject=[
      	'$scope',
      	'$resourceService',
        '$state',
        'loginService',
        'serviceStorage'
      ];

    function controllerResult($scope,$resourceService,$state) {

      var results = $resourceService.request('results');

      $scope.loading = true;

      results.get(function(data){
        $scope.results = data;
        $scope.loading = false;
      });
      
    }
    
})();