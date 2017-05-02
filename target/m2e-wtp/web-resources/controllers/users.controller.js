(function () {
    'use strict';

    angular

    .module('app')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$scope', 'UserService', 'FlashService', '$rootScope'];
    function UsersController($scope, UserService, FlashService, $rootScope) {

        $scope.user = null;
        $scope.adduser = null;
        $scope.allUsers = [];

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    $scope.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    $scope.allUsers = users;
                });
        }

        $scope.deleteUser  = function (id) {
            UserService.Delete(id)
	            .then(function () {
                    FlashService.Success('Utilisateur supprimé', true);

	                loadAllUsers();
	            });
        }

        $scope.addNewUser = function () {
            $scope.dataLoading = true;
            UserService.Create($scope.adduser)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Utilisateur ajouté', true);
    	                loadAllUsers();
    	            	
                    } else {
                        FlashService.Error(response.message);
                        $scope.dataLoading = false;
                    }
                });
        }
        
    }

})();