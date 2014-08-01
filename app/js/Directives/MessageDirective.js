angular
    .module('app.Directives')
    .directive('messagePanel', [function () {
        return {
            restrict: 'AE',

            templateUrl: 'app/partials/MessagePanels.html',

            require: '^ngModel',

            replace: true,

            scope: {
                addLikes: '&',
                messages: '=ngModel'
            }

        };
    }]);