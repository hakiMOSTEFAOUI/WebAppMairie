

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
