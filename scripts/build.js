({
    paths: {
        "modernizr": 'libs/modernizr.custom',
        //jquery & plugins
        "jquery": 'libs/jQuery/jquery-1.11.0.min',
        "less": 'libs/less-1.7.0.min',
        "alertify": 'libs/plugins/alertify.min',
        "bootstrap": 'libs/bootstrap/bootstrap.min',
        //angular & plugins
        "angular": 'libs/angular/angular',
        "ui-router": 'libs/angular/angular-ui-router.min',
        "ui-bootstrap": 'libs/angular/ui-bootstrap-tpls-0.11.0.min',
        "controllers/index": 'controllers/index',
        "directives/index": 'directives/index',
        "services/index": 'services/index'
    },

    shim: {
        "modernizr" :{
            exports: 'modernizr'
        },
        "jquery" :{
            exports: 'jquery'
        },
        "alertify": ["jquery"],
        "bootstrap": ["jquery"],
        "angular": {
            exports: 'angular'
        },
        "ui-router": ["angular"]
    },

    name: "main",
    out: "dist/main.js"
})