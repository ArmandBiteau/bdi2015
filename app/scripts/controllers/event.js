'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
  .controller('EventCtrl', function ($route, $scope, $http) {

      var param = $route.current.params.id;

      $scope.events = [];

      // Get awesome things list
      $http({method: 'GET', url: '/api/events/'+param})
      .success(function (data) {
          $scope.event = data;
      })
      .error(function () {
          console.log('error when pass data..');
      });

  });
