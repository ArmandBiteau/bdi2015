'use strict';

/**
 * @ngdoc overview
 * @name bdi2015App
 * @description
 * # bdi2015App
 *
 * Main module of the application.
 */
angular
  .module('bdi2015App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/features', {
        templateUrl: 'views/features.html',
        controller: 'FeaturesCtrl'
      })
      .when('/features/:id', {
        templateUrl: 'views/feature.html',
        controller: 'FeatureCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/features'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
