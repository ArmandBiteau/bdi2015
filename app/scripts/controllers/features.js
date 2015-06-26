'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:FeaturesCtrl
 * @description
 * # MainCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
  .controller('FeaturesCtrl', function ($scope, $http) {

    $scope.awesomeThings = [];

    // Get awesome things list
    $http({method: 'GET', url: '/api/features'}).

      success(function (data) {
        $scope.awesomeThings = data;
      }).
      error(function () {
        console.log('error when pass data..');
      });
  });
