'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
  .controller('EventsCtrl', function ($scope, $http) {

      $scope.events = [];

      // Get awesome things list
      $http({method: 'GET', url: '/api/events'})
      .success(function (data) {
          $scope.events = data;
      })
      .error(function () {
          console.log('error when pass data..');
      });


  });
