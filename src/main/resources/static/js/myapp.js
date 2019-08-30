var app = angular.module('myapp', ['ngRoute', 'ngResource', 'ngTable']);

app.config(function ($routeProvider) {
	$routeProvider.when('/list-users', {
		templateUrl: '/template/list-users.html',
		controller: 'listuserController',
		controllerAs: 'vm'
	}). when('/register-user', {
		templateUrl: '/template/register-user.html',
		controller: 'registerController'
	}). when('/update-user/:id', {
		templateUrl: '/template/update-user.html',
		controller: 'userController'
	}).otherwise({
		redirectTo: '/home',
		templateUrl: '/template/home.html'
	});
});
