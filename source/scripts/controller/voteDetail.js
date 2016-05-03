(function() {
  'use strict';
  angular.module('module.controller.voteDetail', [])
    .config(function($stateProvider){
      $stateProvider.state('voteDetail', {
          parent: 'root',
          url: "/voteDetail/:pk/:name/:votes",
          templateUrl: "views/voteDetail.html",
          controller: "controller.voteDetail"
      });
    })
    .controller('controller.voteDetail', voteDetail); 

      voteDetail.$inject=[
        '$scope',
      	'$stateParams',
        '$resourceService'
      ];

    function voteDetail($scope, $stateParams, $resourceService) {
      var idea = $resourceService.request('idea');
      $scope.loading = true;
      idea.get({pk: $stateParams.pk},function(detail){
        $scope.detail = detail;
        $scope.loading = false;        
      });

    }
    
})();