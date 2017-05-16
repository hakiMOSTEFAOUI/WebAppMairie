var app = angular.module('app', ['ngRoute', 'ngCookies','ui.bootstrap','ngCkeditor','ui.router']);


(function () {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider','$qProvider'];
    function config($routeProvider, $locationProvider,$qProvider) {
    	$qProvider.errorOnUnhandledRejections(false);

        $routeProvider
            .when('/users', {
            	controller: 'UsersController',
                templateUrl: 'views/users.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'views/login.view.html',
                controllerAs: 'vm'
            })


        .when('/arretes',
            {
                controller: 'ArretesController',
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

    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
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
