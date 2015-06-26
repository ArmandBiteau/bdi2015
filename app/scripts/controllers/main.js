'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.awesomeThings = [];

    // Get awesome things list
    $http({method: 'GET', url: '/api/features'}).

      success(function (data) {
        $scope.awesomeThings = data;

        // Get description of each thing
        $scope.awesomeThings.forEach(function (thing) {

          $http({method: 'GET', url: thing.href}).
            success(function (data) {
              thing.description = data.description;
            }).
            error(function () {
              console.log('error when pass data..');
            });
        });
      }).

      error(function () {
        console.log('error when pass data..');
      });
  });
