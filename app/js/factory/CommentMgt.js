angular.module('app.Factory')
    .factory('CommentMgt', [function () {

        var comments = [];
        comments.push({
            text: 'hello'
        });

        return {

            getCommentsByIdMessage: function (pIdMessage) {
                return filteredComments = _.where(comments, {idMessage: pIdMessage});
            },

            SetComments: function (newComments) {

                var index = comments.push({
                    name: newComments.name,
                    text: newComments.text,
                    idMessage: newComments.idMessage,
                    date_time: new Date()
                }) - 1;

                comments[index].date = comments[index].date_time.toString("d/M/yyyy");
                comments[index].time = comments[index].date_time.toString("HH:mm");

            }
        }
    } ]);
