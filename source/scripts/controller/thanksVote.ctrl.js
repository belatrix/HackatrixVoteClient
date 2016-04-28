(function() {
  'use strict';
  angular.module('module.controller.thanksVote', [])
    .config(function($stateProvider){
      $stateProvider.state('thanksVote', {
          parent: 'root',
          url: "/thanksVote",
          templateUrl: "views/thanksVote.html",
          controller: "controller.thanksVote"
      });
    })
    .controller('controller.thanksVote', controllerPost); 

      controllerPost.$inject=[
      	'$scope'
      ];

    function controllerPost($scope) {
      
    }
    
})();