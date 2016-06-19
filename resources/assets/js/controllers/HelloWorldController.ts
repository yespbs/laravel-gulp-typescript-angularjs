class HelloWorldController {

    constructor ($scope){
        $scope.message = "Hello World";
    }
}


// Link Controller  
var app = angular.module("Piggy");

app.controller("HelloWorldController", ["$scope", HelloWorldController]);