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
        '$mdMedia',
        '$interval',
        '$mdToast'
      ];

    function controllerResult($scope, $resourceService, $state, $mdDialog, $mdMedia, $interval, $mdToast) {

      var getTotalVotes, getVoteResults, intervalResult, last, results, resultsCopy, showSimpleToast;

      results = $resourceService.request('results');
      resultsCopy = [];

      $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
      $scope.loading = true;
      $scope.totalVotes = 0;
      $scope.totalPercent = 0;
      $scope.results = [];

      getTotalVotes = function (data) {
        var totalVotes = 0;

        data.forEach(function(idea){
          
          totalVotes += idea.votes;
        
        });

        return totalVotes;

      };

      getVoteResults = function () {

        results.get(function(data){
          $scope.loading = false;
          $scope.totalVotes = getTotalVotes(data);
          $scope.totalPercent = 0;

          data.forEach(function(idea){
            idea.percent = 0;
            idea.percent = (100 / ($scope.totalVotes / idea.votes));
            $scope.totalPercent += idea.percent;
            idea.percent = parseFloat(idea.percent).toFixed(2);
          
          });

          $scope.totalPercent = parseFloat($scope.totalPercent).toFixed(0);

          angular.copy($scope.results, resultsCopy);

          if(!angular.equals(data, resultsCopy)){
            

            if($scope.results.length>0){

              showSimpleToast();              

            }
  
            angular.merge($scope.results, data);
            
          }

        });

      }; 

      getVoteResults();

      intervalResult = $interval(getVoteResults, 2000);

      $scope.showDetails = function(ev, idea) {
        $state.go('voteDetail', idea, {location: false, inherit: false});
      };

      /*$scope.showDetails = function(ev, ideaResult) {
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
        
      };*/

      showSimpleToast = function() {
        $mdToast.show(
          $mdToast.simple()
            .textContent('New casted votes')
            .position($scope.getToastPosition())
            .hideDelay(3000)
        );
      };

      last = {
        bottom: true,
        top: false,
        left: false,
        right: true
      };

      $scope.toastPosition = angular.extend({},last);
    
      $scope.getToastPosition = function() {
        sanitizePosition();
        return Object.keys($scope.toastPosition)
          .filter(function(pos) { return $scope.toastPosition[pos]; })
          .join(' ');
      };
    
      function sanitizePosition() {
        var current = $scope.toastPosition;
    
        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;
        last = angular.extend({},current);
      }

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });

      $scope.$on('$destroy', function(){
         $interval.cancel(intervalResult);
      });
      
    }

    function DialogController($scope, $mdDialog, detail) {
      $scope.detail = detail;

      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
    
})();