define(['./app'], function (app) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/page1');
        $stateProvider
            .state('/page1', {
                url: "/page1",
                templateUrl: "views/page1.html",
                controller: "page1Ctrl"
            })
    }]);
});