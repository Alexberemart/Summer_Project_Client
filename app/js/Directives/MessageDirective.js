angular
    .module('app.Directives')
    .directive('messagePanel', [function () {
        return {
            restrict: 'AE',

            templateUrl: 'app/partials/MessagePanels.html',

            require: ['^ngModel'],

            replace: true,

            scope: {
                addLikes: '&',
                messages: '=ngModel',
                predicate: '=ngPredicate',
                reverse: '=ngReverse',
                orderByLikes: '&',
                orderByDate: '&',
                showButtons: '=ngShowButtons'
            },

            link: function (scope, element, attributes) {
                scope.tmpOrderByLikes = function () {
                    scope.orderByLikes();
                }

                scope.tmpOrderByDate = function () {
                    scope.orderByDate();
                }
            }

        };
    }]);