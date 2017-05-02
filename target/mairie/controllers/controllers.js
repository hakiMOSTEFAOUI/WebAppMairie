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
app.controller('ArretesController', function ($scope, arretesService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.arretes = arretesService.getArretes();
    }

    $scope.insertArrete = function () {
    	var typeAutorisation= $scope.newArrete.typeAutorisation;
    	var petititionDate= $scope.newArrete.petititionDate;
    	var additionnalInfoTypeAutorisation= $scope.newArrete.additionnalInfoTypeAutorisation;
    	var startDateAutorisation= $scope.newArrete.startDateAutorisation;
    	var endDateAutorisation= $scope.newArrete.endDateAutorisation;
    	var tarif= $scope.newArrete.tarif;
    	var title= $scope.newArrete.title;
    	var topValid= $scope.newArrete.topValid;
    	var articles= $scope.newArrete.articles;
    	var rues= $scope.newArrete.rues;
    	var lois= $scope.newArrete.lois;

        

        arretesService.insertArrete(rues,typeAutorisation,petititionDate,additionnalInfoTypeAutorisation,startDateAutorisation,endDateAutorisation,articles,tarif,topValid,lois);
        //$scope.newArrete.typeAutorisation= '';
        //...
    };

    $scope.deleteArrete = function (id) {
        arretesService.deleteArrete(id);
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


app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and AutorisationsTotal for a Arrete. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.Arrete && $scope.Arrete.Autorisations) {
            var total = 0.00;
            for (var i = 0; i < $scope.Arrete.Autorisations.length; i++) {
                var order = $scope.Arrete.Autorisations[i];
                total += order.orderTotal;
            }
            $scope.AutorisationsTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
