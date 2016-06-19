/// <reference path="../typings/tsd.d.ts" />
var Piggy;
(function (Piggy) {
    'use strict';
    angular.module("Piggy", []);
})(Piggy || (Piggy = {}));
var HelloWorldController = (function () {
    function HelloWorldController($scope) {
        $scope.message = "Hello World";
    }
    return HelloWorldController;
}());
// Link Controller  
var app = angular.module("Piggy");
app.controller("HelloWorldController", ["$scope", HelloWorldController]);
