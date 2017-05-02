/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('mairieApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/arretes',
            {
                controller: 'ArretesController',
                templateUrl: 'partials/arretes.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/arretes/:arreteID',
            {
                controller: 'ArreteController',
                templateUrl: 'partials/arrete.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/autorisations',
            {
                controller: 'AutorisationsController',
                templateUrl: 'partials/autorisations.html'
            })
        .otherwise({ redirectTo: '/arretes' });
});




