angular.module('app.Controllers')
    .controller('messagesByUser', [ '$scope', '$routeParams', 'MessageMgt',
        function ($scope, $routeParams, MessageMgt) {

            var name = $routeParams.userName;

            $scope.messages =MessageMgt.getMessagesByUserName(name);

        } ]);
