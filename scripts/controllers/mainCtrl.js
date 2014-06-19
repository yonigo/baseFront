define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl',['$scope', '$rootScope', '$location', '$window', '$timeout', 'AppData', 'serverConnection', 'utils', '$state', function($scope, $rootScope, $location, $window, $timeout, AppData, serverConnection, utils, $state) {
        $scope.$location =  $location;
        $scope.$state = $state;
        $scope.appData = AppData;

        $scope.init = function() {
        };

        $scope.showSpinner = function() {
            $scope.appData.spinnerCount = ($scope.appData.spinnerCount)?$scope.appData.spinnerCount:0;
            $scope.appData.spinnerCount++;
            $scope.appData.showSpinner = true;
        };

        $scope.hideSpinner = function() {
            $scope.appData.spinnerCount = ($scope.appData.spinnerCount > 0)?$scope.appData.spinnerCount:0;
            $scope.appData.spinnerCount--;
            if ($scope.appData.spinnerCount <= 0)
                $scope.appData.showSpinner = false;
        };

    }]);
});