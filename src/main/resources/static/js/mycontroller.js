app.controller('registerController', function ($scope, $http, $location, $route) {
	$scope.submitUserForm = function () {
		$http({
			method: 'POST',
			url: 'http://localhost:8080/api/user/',
			data: $scope.user
		}).then(function success(response) {
			$location.path('/list-users');
			$route.reload();
		}, function error(response) {
			$scope.errorMessage = 'Error: ' + response.status;
		});
	};
	
	$scope.resetForm = function() {
		$scope.user = null;
	};
	
});

app.controller('listuserController', function ($scope, $http, $location, NgTableParams) {
	var self = this;
	$http({
		method: 'GET',
		url: 'http://localhost:8080/api/user/'
	}).then(function success(response) {
		$scope.users = response.data;
		self.tableParams = new NgTableParams({}, { dataset: response.data});
	});
	
	// click event for Edit button
	$scope.editUser = function(userId) {
		$location.path('/update-user/' + userId);
	}
});

app.controller('userController', function ($scope, $http, $location, $routeParams, $route) {
	// get user by id
	$http({
		method: 'GET',
		url: 'http://localhost:8080/api/user/' + $routeParams.id
	}).then(function success(response) {
		$scope.user = response.data;
	});
	
	$scope.submitUserForm = function () {
		$http({
			method: 'PUT',
			url: 'http://localhost:8080/api/user/' + $routeParams.id,
			data: $scope.user
		}).then(function success(response) {
			$location.path('/list-users');
			$route.reload();
		}, function error(response) {
			$scope.errorMessage = 'Erorr updating user';
		});
	}
});