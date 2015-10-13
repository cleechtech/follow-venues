
app.controller('VenuesCtrl', ['$rootScope', '$scope', '$http', '$stateParams', 'geolocation', 'API_URL', 'auth', 
	function($rootScope, $scope, $http, $stateParams, geolocation, API_URL, auth){
	
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
			}, function(err){
				console.error(err);
			});
	};

	// get venue name
	if($stateParams.name){

		$http.get(API_URL + 'venues/' + $stateParams.name)
			.then(function(res){
				$scope.venue = res.data;
			}, function(err){
				console.error(err);
			});

		$scope.follow = function(venueId){
			var _userId = $rootScope.user._id,
				_token = auth.getToken(),
				_followData = {
					token: _token,
					userId: _userId,
					venueId: venueId
				};

			console.log(_followData);
			$http.post(API_URL + 'follow/venue', _followData);
		};
	}
}]);