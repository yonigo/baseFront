define([
    'angular',
    './controllers/index',
    './directives/index',
    './services/index',
    'ui-router'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.services',
        'ui.router'
    ]);
});