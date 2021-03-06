(function() {

    var app = angular.module('app', [
        'ngAnimate',
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'ngStorage',
        'ui.router',
        'module.controller',
        'module.service',
        'module.constant',
        'module.component'
    ]);


    app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider, $mdIconProvider, $resourceProvider) {

        $resourceProvider.defaults.stripTrailingSlashes = false;

        $stateProvider.state('init', {
            abstract: true,
            views: {
              'content@': {
                template: '<ui-view />', // NEW line, with a target for a child
              }
            }
        }).state('root', {
            abstract: true,
            views: {
              '@': {
                template: '<ui-view />', // NEW line, with a target for a child
              },
              'header@': {
                templateUrl: 'views/header.view.html',
                controller: 'controllerHeader'
              },
              'content@': {
                templateUrl: 'views/leftSide.view.html',
                controller: 'controller.leftSide',
              }
            }
        }).state('login', {
            parent:'init',
            url: "/login",
            templateUrl: "views/login.view.html",
            controller: "controller.login"
        });

        $urlRouterProvider.otherwise("/voteList");
        
        $httpProvider.interceptors.push(['$q', '$location','serviceStorage', function($q, $location, serviceStorage) {
            return {
                    'request': function (config) {
                        config.headers = config.headers || {};
                        if (serviceStorage.getData('token')) {
                            config.headers.Authorization = serviceStorage.getData('token');
                        }
                        return config;
                    },
                    'responseError': function(response) {

                        if(response.status === 401 || 
                           response.status === 403 || 
                           response.status === 500 || 
                           response.status===0) {

                            //$location.path('/login');
                        
                        }
                        return $q.reject(response);
                    }
            };
        }]);

        $mdIconProvider.icon("menu", "svg/menu.svg", 24)
                      .icon("share", "svg/share.svg", 24)
                      .icon("arrow_back", "svg/arrow_back.svg", 24)
                      .icon("arrow_forward", "svg/arrow_forward.svg", 24)
                      .icon("caret_up", "svg/caret_up.svg", 24)
                      .icon("caret_down", "svg/caret_down.svg", 24)
                      .icon("search", "svg/search.svg", 24)
                      .icon("close-light", "svg/close-light.svg", 24)
                      .icon("more-vert", "svg/ic_more_vert.svg", 24)
                      .icon("list", "svg/list.svg", 24)
                      .icon("chart", "svg/chart.svg", 24)
                      .icon("close", "svg/close.svg", 24);

        $mdThemingProvider.theme('default').primaryPalette('orange')
            .accentPalette('light-blue');
        
    });

    app.run( function( $rootScope ,$resourceService, $state) {


        var checkingSession = function(){

            var verify = $resourceService.request('verify');

              verify.get(function(verify){
                  $state.go('dashboard');
              },function(error){
                  $state.go('login');
              });              

        };
        
        $rootScope.$on('$locationChangeStart',function(obj,data){
            
            //checkingSession();
           
        });

    });


})();