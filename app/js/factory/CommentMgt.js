angular.module('app.Factory')
    .factory('CommentMgt', [function () {

        var comments = [];
        comments.push({
            text: 'hello',
            idMessage: 0
        });
        var index = null;

        return {

            getComments: function () {
                return comments;
            },

            getCommentsByIdMessage: function () {
                return _.where(comments, {idMessage: index});
            },

            SetComments: function (newComments) {

                var index2 = comments.push({
                    name: newComments.name,
                    text: newComments.text,
                    idMessage: newComments.idMessage,
                    date_time: new Date()
                }) - 1;

                comments[index2].date = comments[index2].date_time.toString("d/M/yyyy");
                comments[index2].time = comments[index2].date_time.toString("HH:mm");
            },

            SetIndex: function (pIdMessage) {
                index = pIdMessage;
            }
        }
    } ]);
