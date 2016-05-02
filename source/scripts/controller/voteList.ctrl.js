(function() {
  'use strict';
  angular.module('module.controller.voteList', [])
    .config(function($stateProvider){
      $stateProvider.state('voteList', {
          parent: 'root',
          url: "/voteList",
          templateUrl: "views/voteList.html",
          controller: "controller.voteList"
      });
    })
    .controller('controller.voteList', controllerPost); 

      controllerPost.$inject=[
      	'$scope',
      	'$resourceService',
        '$state',
        'loginService',
        'serviceStorage'
      ];

    function controllerPost($scope,$resourceService,$state) {

      var ideas = $resourceService.request('ideas');
      var vote = $resourceService.request('vote');

      $scope.loading = true;

      ideas.get(function(data){
        $scope.ideas = data;
        $scope.loading = false;
      });

      $scope.voteIdea = function(idea){
        $scope.loading = true;
        vote.post({pk: idea.pk}, function(){
          $scope.loading = false;
          $state.go('thanksVote', {name: 'hola'});
        });
      };
      
    }
    
})();