/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the arretesService and associates it with the $scope
//The $scope is ultimately bound to the arretes view
//angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])


//app.controller('ArretesController', function($scope, $attrs, uibPaging, uibPagerConfig, arretesService) {
app.controller('ArretesController', function($scope, arretesService) {


			$scope.editorOptions = {
				    language: 'fr',
				    uiColor: '#000000'
				};
	  //$scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    $log.log('Page changed to: ' + $scope.currentPage);
	  };
	  $scope.open1 = function() {
		    $scope.popup1.opened = true;
	 };
	  $scope.open2 = function() {
		    $scope.popup2.opened = true;
	 };
	  $scope.open3 = function() {
		    $scope.popup3.opened = true;
	 };

	  $scope.ajouter_partie= function() {
		    if (!$scope.newArrete.parties) $scope.newArrete.parties= [{}];
		    else $scope.newArrete.parties.push({});
	 };

	  $scope.ajouter_article= function(partie) {
		    if (!partie.articles) partie.articles= [{}];
		    else partie.articles.push({});
	 };

	  //uibPaging.create(this, $scope, $attrs);
	  
    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
   	 $scope.altInputFormats = ['M!/d!/yyyy'];

	  $scope.popup1 = {
			    opened: false
			  };
	  $scope.popup2 = {
			    opened: false
			  };
	  $scope.popup3 = {
			    opened: false
			  };
	  $scope.types_delai=["le","à partir du", "du..au"];
        $scope.arretes = arretesService.getArretes();
    	  $scope.totalItems = 64;
    	//  $scope.bigTotalItems = 175;

    	  $scope.newArrete= {type_delai:"le"};
    	  
      $scope.totalItems =  $scope.arretes.length;
	  $scope.currentPage = 1;
	  $scope.pageSize = 3;
	  $scope.maxSize = 1;
	  //$scope.bigTotalItems = $scope.arretes.length;
	  //$scope.bigCurrentPage = 1;
    }

    $scope.insertArrete = function () {
        arretesService.insertArrete($scope.newArrete);
        $scope.totalItems =  $scope.arretes.length;
    };

    $scope.deleteArrete = function (id) {
        arretesService.deleteArrete(id);
        $scope.totalItems =  $scope.arretes.length;
    };
});

//This controller retrieves data from the arretesService and associates it with the $scope
//The $scope is bound to the order view
app.controller('ArreteController', function ($scope, $routeParams, arretesService) {
    $scope.arrete = {};

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab ArreteID off of the route        
        var ArreteID = ($routeParams.ArreteID) ? parseInt($routeParams.ArreteID) : 0;
        if (ArreteID > 0) {
            $scope.arrete = arretesService.getArrete(ArreteID);
        }
    }

});
