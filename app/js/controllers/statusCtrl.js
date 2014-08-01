angular.module('app.Controllers')
    .controller('statusCtrl', [ '$scope', '$http', '$routeParams', 'MessageMgt', 'CommentMgt',
        function ($scope, $http, $routeParams, MessageMgt, CommentMgt) {

            $scope.messages = [];
            $scope.comments = CommentMgt.GetComments();

            $scope.newComment = {
                name: null,
                text: null
            };

            //ESTO ES UN MENSAJE DE PRUEBA
            var index = parseInt($routeParams.message);
            $scope.messages.push(MessageMgt.GetMessagesById(index));

            $scope.sendComment = function () {
                CommentMgt.SetComments($scope.newComment);

                $scope.newComment = [];
            };

        } ]);
