
app.controller('VenuesCtrl', ['$scope', '$http', '$stateParams', 'geolocation', 'API_URL', 
	function($scope, $http, $stateParams, geolocation, API_URL){
	$scope.newVenue = {};
	$scope.addVenue = function(){
		$http.post(API_URL + 'venues', $scope.newVenue)
			.then(function(res){
				$scope.successMessage = res.data.message;
				$scope.errMessage = null;
				$scope.newVenue = {};
			}, function(err){
				$scope.errMessage = err.statusText;
				$scope.successMessage = null;
			});
	};

	$scope.getAll = function(){
		$http.get(API_URL + 'venues')
			.then(function(res){
				$scope.venues = res.data;
				console.log(res);
			}, function(err){
				console.error(err);
			});
	};

	if($stateParams.venue){
		$scope.venue = $stateParams.venue;
	}
}]);