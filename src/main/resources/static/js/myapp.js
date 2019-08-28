var app = angular.module('myapp', ['ngRoute', 'ngResource', 'ngTable']);

app.config(function ($routeProvider) {
	$routeProvider.when('/listuser', {
		templateUrl: '/template/listuser.html',
		controller: 'listuserController',
		controllerAs: 'vm'
	}). when('/register', {
		templateUrl: '/template/register',
		controller: 'registerController'
	}).otherwise({
		redirectTo: '/home',
		templateUrl: '/template/home.html'
	});
});
