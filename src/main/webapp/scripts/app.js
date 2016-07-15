'use strict';

angular.module('reserveyourroombackend',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/RoomEntities',{templateUrl:'views/RoomEntity/search.html',controller:'SearchRoomEntityController'})
      .when('/RoomEntities/new',{templateUrl:'views/RoomEntity/detail.html',controller:'NewRoomEntityController'})
      .when('/RoomEntities/edit/:RoomEntityId',{templateUrl:'views/RoomEntity/detail.html',controller:'EditRoomEntityController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
