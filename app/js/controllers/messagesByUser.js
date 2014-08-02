angular.module('app.Controllers')
    .controller('messagesByUser', [ '$scope', '$routeParams', 'MessageMgt',
        function ($scope, $routeParams, MessageMgt) {

            $scope.name = $routeParams.userName;
            $scope.messages =MessageMgt.getMessagesByUserName($scope.name);

        } ]);
