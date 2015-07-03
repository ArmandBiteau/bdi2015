'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
    .controller('NavCtrl', function ($scope, $location) {
        $scope.pages = [
        {
            id: 'events',
            title: 'Events',
            url: '#/events'
        },
        {
            id: 'about',
            title: 'About',
            url: '#/about'
        }
        ];

        var viewLocation = '#'+$location.path();
        angular.forEach($scope.pages,function(value){
            if (value.url === viewLocation) {
                value.active = true;
            }
        });

  });
