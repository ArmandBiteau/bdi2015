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
    'ngTouch',
    'facebookUtils'
    ])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/features', {
            templateUrl: 'views/features.html',
            controller: 'FeaturesCtrl'
        })
        .when('/features/:id', {
            templateUrl: 'views/feature.html',
            controller: 'FeatureCtrl',
            needAuth: true
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/sample', {
            templateUrl: 'views/sample.html',
            controller: 'SampleCtrl'
        })
        .when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    })
    .constant('facebookConfigSettings', {
        'appID' : '704895206321216',
        'routingEnabled' : true,
        cookie: true,
        status: true,
        xfbml: true,
        loginPath: '/error'
    });
