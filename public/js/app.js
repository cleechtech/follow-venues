
var app = angular.module('jwtintro', [
	'ui.router',
	'formly',
	'formlyBootstrap',
	'geolocation'
], function($httpProvider){
	// will add token to header of requests if token is present
	$httpProvider.interceptors.push('authInterceptor');
});

app.run(function($rootScope, auth){
	// if the user's data is in local storage
	// show them as signed in
	var _user = auth.getUser();

	if(_user){
		$rootScope.user = JSON.parse(_user);
	}
});

app.constant('API_URL', 'api/');

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "templates/main.html",
			controller: 'MainCtrl'
		})
		.state('venue', {
			url: '/venues/:name',
			templateUrl: 'templates/venues/venue.html',
			controller: 'VenuesCtrl'
		})
		.state('addVenue', {
			url: "/addVenue",
			templateUrl: "templates/venues/add.html",
			controller: 'VenuesCtrl'
		})
		.state('auth', {
			abstract: true,
			templateUrl: 'templates/auth/main.html'
		})
		.state('auth.login', {
			url: "/login",
			templateUrl: "templates/auth/login.html",
			controller: 'LoginCtrl'
		})
		.state('auth.register', {
			url: "/register",
			templateUrl: "templates/auth/register.html",
			controller: 'RegisterCtrl'
		});

	$urlRouterProvider.otherwise("/");
});