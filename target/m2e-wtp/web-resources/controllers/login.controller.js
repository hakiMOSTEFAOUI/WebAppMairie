(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;
console.log("ici");
        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
/*
.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
	  $scope.credentials = {
	    username: '',
	    password: ''
	  };
	  $scope.login = function (credentials) {
	    AuthService.login(credentials).then(function (user) {
	      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
	      $scope.setCurrentUser(user);
	    }, function () {
	      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
	    });
	  };
	})
	*/
