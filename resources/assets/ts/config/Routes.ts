// Link Controller  
var app = angular.module("Piggy");

(function( ng, app ) {
	class Routes{

		constructor( $routeProvider ){
			$routeProvider
			.when('/',
				{
					controller: 'HelloWorldController',
					templateUrl: 'assets/html/helloworld.html'
				}
			);
		}
	}

	// routes
	app.config( Routes );

})( angular, app );	