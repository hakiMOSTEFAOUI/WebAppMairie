﻿var app = angular.module('app', ['ngRoute', 'ngCookies','ui.bootstrap','ngCkeditor','ui.router']);


(function () {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider','$qProvider','$stateProvider'];
    function config($routeProvider, $locationProvider,$qProvider,$stateProvider	) {
    	$qProvider.errorOnUnhandledRejections(false);

        $routeProvider
         
        .when('/users', {
        	controller: 'usersController',
            templateUrl: 'views/users.view.html',
            controllerAs: 'vm'
        })

            .when('/login', {
                controller: 'loginController',
                templateUrl: 'views/login.view.html',
                controllerAs: 'vm'
            })


        .when('/arretes',
            {
                controller: 'arretesController',
                templateUrl: 'views/arretes.view.html',
                    controllerAs: 'vm'

            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/arrete/:arreteID',
            {
                controller: 'ArreteController',
                templateUrl: 'views/arrete.view.html',
                controllerAs: 'vm'

            })
        .otherwise({ redirectTo: '/arretes' });
        
        /*
        $stateProvider.state('arretes'), 
        	'views': {		
        		'filters': {		
        			templateUrl: 'views/arrete.saisie.html',		
        			controller: function($scope){ ... controller stuff just for filters view ... }		
            },	*/

    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http','bouchons'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login',  '', '/arretes']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
