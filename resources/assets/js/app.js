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
        function HelloWorldController($scope, $http) {
            // init
            $scope.user = {};
            // set
            $scope.message = "Hello World from Piggy";
            // defines the function and extend context
            $scope.sayHello = function () {
                alert('Hello ' + $scope.user.name);
                //alert('Hello');
            };
            // defines the function and extend context
            $scope.loadPhotos = function () {
                //alert('aa');
                var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=mount rainier&tagmode=any&jsoncallback=?";
                var req = {
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
                $http.jsonp(flickerAPI)
                    .then(function (data) {
                    $.each(data.items, function (i, item) {
                        $("<img>").attr("src", item.media.m).appendTo("#photos");
                        if (i === 3) {
                            return false;
                        }
                    });
                }, function (data) {
                    alert('error');
                });
            };
            return this;
        }
        return HelloWorldController;
    }());
    app.controller("HelloWorldController", ["$scope", '$http', HelloWorldController]);
})(angular, app);
// Link Controller  
var app = angular.module("Piggy");
(function (ng, app) {
    var Routes = (function () {
        function Routes($routeProvider) {
            $routeProvider
                .when('/', {
                controller: 'HelloWorldController',
                templateUrl: 'assets/html/helloworld.html'
            });
        }
        return Routes;
    }());
    // routes
    app.config(Routes);
})(angular, app);
