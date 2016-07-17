// Link Controller  
var app = angular.module("Piggy");

(function( ng, app ) {

	class HelloWorldController {

	    constructor ($scope){
	    	// init
	    	$scope.user = {};
	    	
	    	// set
	        $scope.message = "Hello World from Piggy";

	        // defines the function and extend context
	        $scope.showHello = () => {
	        	alert( $scope.user.name );
	        }
	    }
	}

	app.controller("HelloWorldController", ["$scope", '$http', HelloWorldController]);
	
})( angular, app );	