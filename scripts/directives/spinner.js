define(['./module'], function (directives) {
    'use strict';
    directives.directive('spinner', function() {
        'use strict';
        return {
            restrict: 'A',
            template:  '<div class="spinner">'+
                '<div ng-repeat="i in [1,2,3]" class="spinner-container">' +
                '<div ng-repeat="j in [1,2,3,4]" class="circle"></div>' +
                '</div>' +
                '</div>' +
                '<div class="spinner-text" data-ng-show="text">{{text}}</div>',
            scope: {
                text: '='
            }
        };
    });
});


