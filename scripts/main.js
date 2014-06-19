requirejs.config({

    baseUrl: 'scripts',

    paths: {
        "modernizr": 'libs/modernizr.custom',
        "domReady": 'libs/domReady',
        //jquery & plugins
        "jquery": 'libs/jQuery/jquery-1.11.0.min',
        "less": 'libs/less-1.7.0.min',
        "alertify": 'libs/plugins/alertify.min',
        "bootstrap": 'libs/bootstrap/bootstrap.min',
        //angular & plugins
        "angular": 'libs/angular/angular.min',
        "ui-router": 'libs/angular/angular-ui-router.min',
        "ui-bootstrap": 'libs/angular/ui-bootstrap-tpls-0.11.0.min',
        "controllers/index": 'controllers/index',
        "directives/index": 'directives/index',
        "services/index": 'services/index'
    },

    shim: {
        "angular": {
            exports: 'angular'
        },
        "ui-router": ["angular"],
        "ui-bootstrap": ["angular"],
        "jquery" :{
            exports: 'jquery'
        },
        "bootstrap": ["jquery"],
        "less": ["jquery"],
        "alertify": ["jquery"]
    },

    deps: ['./appStart']

});
