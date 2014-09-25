angular
    .module('app.Directives')
    .directive('validText', [function () {
        return {
            restrict: 'A',

            require: 'ngModel',

            link: function (scope, element, attributes, ngModelCtrl) {
                //VALIDACION
                //WATCH
                var validate_message = function (text) {

                    var valid = true;

                    if (text == null) {
                        valid = false;
                    }
                    else {

                        if (text.length < 3) {
                            valid = false;
                        }

                        if (text.substr(text.length - 1, 1) != '.') {
                            valid = false;
                        }
                    }

                    ngModelCtrl.$setValidity('validText', valid);
                    return text;
                };

                ngModelCtrl.$parsers.unshift(validate_message);
            }
        };
    }]);