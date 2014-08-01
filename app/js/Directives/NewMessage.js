angular
    .module('app.Directives')
    .directive('messageForm', [function () {
        return {
            restrict: 'AE',

            templateUrl: 'app/partials/NewMessageForm.html',

            require: '^ngModel',

            replace: true,

            scope: {
                newMessageAction: '&',
                newMessage: '=ngModel'
            },

            link: function (scope, element, attributes, Ng) {
                scope.sendMessageDir = function () {
                    scope.newMessageAction();
                };
            }
        };
    }]);