define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('page1Ctrl',['$scope', '$rootScope', '$location', '$window', '$timeout', 'AppData', 'serverConnection', 'utils', '$state', function($scope, $rootScope, $location, $window, $timeout, AppData, serverConnection, utils, $state) {

        $scope.$location =  $location;
        $scope.$state = $state;
        $scope.appData = AppData;

        $scope.init = function() {
            debugger;
        };

    }]);
});