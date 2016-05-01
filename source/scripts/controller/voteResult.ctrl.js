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
    .controller('controller.voteResult', controllerResult)
    .controller('controller.DialogController', DialogController);

      controllerResult.$inject=[
      	'$scope',
      	'$resourceService',
        '$state',
        '$mdDialog', 
        '$mdMedia'
      ];

    function controllerResult($scope, $resourceService, $state, $mdDialog, $mdMedia) {

      var results = $resourceService.request('results');
      var idea = $resourceService.request('idea');

      $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
      $scope.loading = true;
      $scope.totalVotes = 0;
      $scope.totalPercent = 0;

      results.get(function(data){
        $scope.loading = false;

        data.forEach(function(idea){
          
          $scope.totalVotes += idea.votes;
        
        });

        data.forEach(function(idea){
          
          idea.percent = (100 / ($scope.totalVotes / idea.votes));
          $scope.totalPercent += idea.percent;
          idea.percent = parseFloat(idea.percent).toFixed(2);
        
        });

        $scope.totalPercent = parseFloat($scope.totalPercent).toFixed(0);
        $scope.results = data;

      });

      $scope.showDetails = function(ev, ideaResult) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $scope.loading = true;
        idea.get({pk: ideaResult.pk},function(detail){
          $scope.loading = false;
          
          $mdDialog.show({
            controller: DialogController,
            templateUrl: '/views/dialog/voteDetail.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen,
            locals: {
             detail: detail
           },
          }).then(function(answer) {           
          }, function() {
            console.log('close');
          });

        }, function(error){
          console.error(error);
        });
        
      };

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
      
    }

    function DialogController($scope, $mdDialog, detail) {
      $scope.detail = detail;

      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
    
})();