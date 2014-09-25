angular.module('app.Controllers')
    .controller('index2', [ '$scope', '$http', 'MessageMgt',
        function ($scope, $http, MessageMgt) {

            MessageMgt.LoadMessages();
            $scope.messages = MessageMgt.GetMessages();

            $scope.newMessage = {
                name: null,
                text: null
            };

            $scope.sendMessage = function () {
                MessageMgt.SetMessages($scope.newMessage);
                $scope.newMessage = [];
            };

            $scope.addLikes = function (pId) {
                MessageMgt.addLikesById(pId);
            };

            $scope.orderByLikes = function(){
                $scope.predicate = 'relevance';
                $scope.reverse = true;
            };

            $scope.orderByDate = function(){
                $scope.predicate = 'date_time';
                $scope.reverse = true;
            };

            var orderByDate2 = function(){
                $scope.orderByDate();
            };

            orderByDate2();

        } ]);
