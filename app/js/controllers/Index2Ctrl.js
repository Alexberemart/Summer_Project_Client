angular.module('app.Controllers')
    .controller('index2', [ '$scope', '$http', 'MessageMgt',
        function ($scope, $http, MessageMgt) {

            $scope.messages = MessageMgt.GetMessages();
            $scope.newMessage = {
                name: null,
                text: null
            };

            $scope.sendMessage = function () {
                MessageMgt.SetMessages($scope.newMessage);
                $scope.newMessage = [];
            };

            $scope.addLikes = function (message) {
                message.likes += 1;
            }

        } ]);
