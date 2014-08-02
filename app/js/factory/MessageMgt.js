angular.module('app.Factory')
    .factory('MessageMgt', [function () {

        var messages = [];

        return {
            GetMessages: function () {
                return messages;
            },

            GetMessagesById: function (id) {
                return messages[id];
            },

            SetMessages: function (newMessage) {

                var index = messages.push({
                    name:       newMessage.name,
                    text:       newMessage.text,
                    date_time:  new Date(),
                    likes:      0,
                    comments:   0
                }) - 1;

                messages[index].date = messages[index].date_time.toString("d/M/yyyy");
                messages[index].time = messages[index].date_time.toString("HH:mm");

            },

            addCommentById: function (id) {
                messages[id].comments += 1;
            }
        }
    } ]);