// Link Controller  
var app = angular.module("Piggy");

(function( ng, app ) {

	class HelloWorldController {

	    constructor ($scope:any, $http:any){
	    	// init
	    	$scope.user = {};
	    	
	    	// set
	        $scope.message = "Hello World from Piggy";

	        // defines the function and extend context
	        $scope.sayHello = () => {
	        	alert( 'Hello ' + $scope.user.name );
	        	//alert('Hello');
	        };

	        // defines the function and extend context
	        $scope.loadPhotos = () => {
	        	//alert('aa');

	        	let flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=mount rainier&tagmode=any&jsoncallback=?";
				
				let req = {
					method: 'GET',
					url: flickerAPI,
					headers: {
					   'Content-Type': 'application/json'
					},
					dataType: 'jsonp',
					crossDomain: true,
					data: {
					    tags: "mount rainier",
					    tagmode: "any",
					    format: "json"
					}
				}; 

				$http.jsonp( flickerAPI )
			    .then(function( data ) {
				    $.each( data.items, function( i, item ) {
				        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#photos" );
				        if ( i === 3 ) {
				          return false;
				        }
				    });
				}, function( data ){
					alert('error');
				});
	        };	

	        return this;
	    }
	}

	app.controller("HelloWorldController", ["$scope", '$http', HelloWorldController]);
	
})( angular, app );	