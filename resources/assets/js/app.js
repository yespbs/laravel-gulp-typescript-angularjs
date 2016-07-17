// Link Controller  
var app = angular.module("Piggy");
(function (ng, app) {
    var Routes = (function () {
        function Routes($routeProvider) {
            $routeProvider
                .when('/', {
                controller: 'HelloWordldController',
                templateUrl: 'assets/html/helloworld.html'
            });
        }
        return Routes;
    }());
    // routes
    app.config(Routes);
})(angular, app);
/// <reference path="../typings/tsd.d.ts" />
var Piggy;
(function (Piggy) {
    'use strict';
    angular.module("Piggy", ['ngRoute']);
})(Piggy || (Piggy = {}));
// Link Controller  
var app = angular.module("Piggy");
(function (ng, app) {
    var HelloWorldController = (function () {
        function HelloWorldController($scope) {
            // init
            $scope.user = {};
            // set
            $scope.message = "Hello World from Piggy";
            // defines the function and extend context
            $scope.showHello = function () {
                alert($scope.user.name);
            };
        }
        return HelloWorldController;
    }());
    app.controller("HelloWorldController", ["$scope", '$http', HelloWorldController]);
})(angular, app);
