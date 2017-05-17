(function () {
    'use strict';

    angular.module('app').controller('usersController', UsersController);

    UsersController.$inject = ['$scope', 'userService', 'FlashService', '$rootScope'];
    function UsersController($scope, userService, FlashService, $rootScope) {

        $scope.user = null;
        $scope.adduser = null;
        $scope.allUsers = [];

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            userService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    $scope.user = user;
                });
        }

        function loadAllUsers() {
            userService.GetAll()
                .then(function (users) {
                    $scope.allUsers = users;
                });
        }

        $scope.deleteUser  = function (id) {
            userService.Delete(id)
	            .then(function () {
                    FlashService.Success('Utilisateur supprimé', true);

	                loadAllUsers();
	            });
        }

        $scope.addNewUser = function () {
            $scope.dataLoading = true;
            userService.Create($scope.adduser)
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