app.controller('registerController', function () {
	
});

app.controller('listuserController', function ($scope, $http, NgTableParams) {
	var self = this;
	$http({
		method: 'GET',
		url: 'http://localhost:8080/api/user/'
	}).then(function (response) {
		$scope.users = response.data;
		self.tableParams = new NgTableParams({}, { dataset: response.data});
	});
	
});