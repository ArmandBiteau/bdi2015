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
        .when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/sample', {
            templateUrl: 'views/sample.html',
            controller: 'SampleCtrl',
            needAuth: true
        })
        .when('/events', {
            templateUrl: 'views/events.html',
            controller: 'EventsCtrl',
            needAuth: true
        })
        .when('/events/:id', {
            templateUrl: 'views/event.html',
            controller: 'EventCtrl',
            needAuth: true
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
