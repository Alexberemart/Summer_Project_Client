angular.module('app.Controllers')
    .controller('statusCtrl', [ '$scope', '$http', '$routeParams', 'MessageMgt', 'CommentMgt',
        function ($scope, $http, $routeParams, MessageMgt, CommentMgt) {

            var index = parseInt($routeParams.message);

            $scope.messages = [];
            $scope.messages.push(MessageMgt.GetMessagesById(index));

            CommentMgt.SetIndex(index);

            var resetNewComment = function () {
                $scope.newComment = {
                    name: null,
                    text: null,
                    idMessage: index
                };
            };

            var loadComments = function(){
                $scope.comments = CommentMgt.getCommentsByIdMessage();
            };

            $scope.sendComment = function () {
                CommentMgt.SetComments($scope.newComment);

                resetNewComment();
                loadComments();
                MessageMgt.addCommentById(index);
            };

            resetNewComment();
            loadComments();

        } ]);
