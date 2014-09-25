angular.module('app.Controllers')
    .controller('statusCtrl', [ '$scope', '$http', '$routeParams', 'MessageMgt', 'CommentMgt',
        function ($scope, $http, $routeParams, MessageMgt, CommentMgt) {

            var index = parseInt($routeParams.message);

            $scope.messages = [];
            $scope.messages.push(MessageMgt.GetMessagesById(index));

            CommentMgt.SetIndex(index);
            CommentMgt.LoadComments();

            var resetNewComment = function () {
                $scope.newComment = {
                    name: null,
                    text: null,
                    idMessage: $scope.messages[0].id
                };
            };

            var loadComments = function(){
                $scope.comments = CommentMgt.getComments();
            };

            $scope.sendComment = function () {
                CommentMgt.SetComments($scope.newComment);

                resetNewComment();
                loadComments();
                MessageMgt.addCommentById(index);
            };

            $scope.addLikes = function (pId) {
                MessageMgt.addLikesById(pId);
            };

            resetNewComment();
            loadComments();

        } ]);
