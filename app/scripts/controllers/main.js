'use strict';

/**
 * @ngdoc function
 * @name bdi2015App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bdi2015App
 */
angular.module('bdi2015App')
    .controller('MainCtrl', function ($rootScope, $scope, facebookUser) {

        $scope.error = 'You need to be logged to access this page !';
        
        $rootScope.loggedInUser = {};
        $rootScope.userGroups = {};

        $rootScope.$on('fbLoginSuccess', function() {
            facebookUser.then(function(user) {
                user.api('/me').then(function(response) {
                    $rootScope.loggedInUser = response;
                    $scope.user = $rootScope.loggedInUser;
                    console.log($scope.user);
                });
                user.api('/me/groups').then(function(response) {
                    $rootScope.userGroups = response.data;
                    $scope.userGroups = $rootScope.userGroups;
                    console.log($scope.userGroups);
                });
            });
        });

        $rootScope.$on('fbLogoutSuccess', function() {
            $scope.$apply(function() {
                $rootScope.loggedInUser = {};
                $rootScope.userGroups = {};
                $scope.loggedInUser = {};
                $scope.userGroups = {};
            });
        });

});
