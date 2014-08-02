angular.module('app.Controllers')
    .controller('statusCtrl', [ '$scope', '$http', '$routeParams', 'MessageMgt', 'CommentMgt',
        function ($scope, $http, $routeParams, MessageMgt, CommentMgt) {

            var index = parseInt($routeParams.message);

            $scope.messages.push(MessageMgt.GetMessagesById(index));
            $scope.comments = CommentMgt.getCommentsByIdMessage(index);

            var resetNewComment = function () {
                $scope.newComment = {
                    name: null,
                    text: null,
                    idMessage: index
                };
            };

            $scope.sendComment = function () {
                CommentMgt.SetComments($scope.newComment);

                resetNewComment();
            };

            resetNewComment();

        } ]);
