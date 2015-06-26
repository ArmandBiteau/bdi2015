'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:FeatureCtrl
 * @description
 * # FeatureCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
  .controller('FeatureCtrl', function ($http, $scope, $route) {

    var param = $route.current.params.id;

    $scope.awesomeThings = [];

    // Get awesome things list
    $http({method: 'GET', url: '/api/features/'+param}).
      success(function (data) {
        $scope.thing = data;
      }).
      error(function () {
        console.log('error when pass data..');
      });
  });
