
app.controller('MainCtrl', function($rootScope, $scope, $http, API_URL){

	if($rootScope.user){
		// get all users
		$http.get(API_URL + 'users').then(function(users){
			$scope.users = users.data;
		}, function(err){
			console.error('Error getting users');
		});

		// get all venues
		$http.get(API_URL + 'venues').then(function(users){
			$scope.venues = users.data;
		}, function(err){
			console.error('Error getting venues');
		});
	}

});