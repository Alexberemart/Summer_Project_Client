angular
    .module('app.Directives')
    .directive('validText', [function () {
        return {
            restrict: 'A',

            require: '^ngModel',

            link: function (scope, element, attributes, Ng) {

                var validate_message = function (text) {

                    var valid = true;

                    if (text.length < 3) {
                        valid = false;
                    }

                    if (text.substr(text.length - 1, 1) != '.') {
                        valid = false;
                    }

                    Ng.$setValidity('validText', valid);
                    return text;
                };

                Ng.$parsers.unshift(validate_message);
            }
        };
    }]);