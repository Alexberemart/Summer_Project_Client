angular.module('app.Factory')
    .factory('CommentMgt', ['$http', 'MessageMgt', function ($http, MessageMgt) {

        var comments = [];
        /*        comments.push({
         text: 'hello',
         idMessage: 0
         });*/
        var index = null;
        var obj = {};

        obj.getComments = function () {
            return comments;
        };

        obj.getCommentsByIdMessage = function () {
            return _.where(comments, {idMessage: index});
        };

        obj.SetComments = function (newComments) {

            var index2 = comments.push({
                name: newComments.name,
                text: newComments.text,
                idMessage: String(newComments.idMessage),
                date_time: new Date()
            }) - 1;

            comments[index2].date = comments[index2].date_time.toString("d/M/yyyy");
            comments[index2].time = comments[index2].date_time.toString("HH:mm");
            comments[index2].date_time_to_save = comments[index2].date_time.toString("yyyy-MM-dd");
            comments[index2].date_time_to_save += " ";
            comments[index2].date_time_to_save += comments[index2].date_time.toString("HH:mm:ss");

            obj.SaveCommentById(index2);
        };

        obj.SetIndex = function (pIdMessage) {
            index = String(pIdMessage);
        };

        obj.SaveCommentById = function (id) {

            var arr = [];
            arr.push(comments[id]);
            $http.post('http://localhost:9000/services/saveCommentList', arr)
                .success(function (data) {
                })
        };

        obj.LoadComments = function () {

            var message = MessageMgt.GetMessagesById(index);
            comments = [];

            $http.post('http://localhost:9000/services/getCommentListById', [{id: message.id}])
                .success(function (data) {

                    _.each(data, function (d) {

                        var index2 = comments.push({
                            name: d.name,
                            text: d.text,
                            idMessage: d.id_message,
                            date_time: d.date_time
                        }) - 1;

                        comments[index2].date = comments[index2].date_time.toString("d/M/yyyy");
                        comments[index2].time = comments[index2].date_time.toString("HH:mm");
                        comments[index2].date_time_to_save = comments[index2].date_time.toString("yyyy-MM-dd");
                        comments[index2].date_time_to_save += " ";
                        comments[index2].date_time_to_save += comments[index2].date_time.toString("HH:mm:ss");
                    })
                })
        };

        return obj;
    } ]);
