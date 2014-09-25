angular.module('app.Factory')
    .factory('MessageMgt', ['$http', function ($http) {

        var messages = [];
        var obj = {};

        //Obtiene el set dcompleto de mensajes.
        obj.GetMessages = function () {
            return messages;
        };

        //Obtiene un mensaje
        obj.GetMessagesById = function (pId) {
            return messages[pId];
        };

        //Obtiene los mensajes de un usuario.
        obj.getMessagesByUserName = function (pName) {
            return _.where(messages, {name: pName});
        };

        //Inserta un mensaje.
        obj.SetMessages = function (newMessage) {

            var index = messages.push({
                index: 0,
                id: 0,
                name: newMessage.name,
                text: newMessage.text,
                date_time: new Date(),
                likes: 0,
                comments: 0
            }) - 1;

            obj.dateHandle(index);
            obj.calcRelevanceById(index);
            obj.SaveMessagesById(index);

        };

        //Aumenta el contador de comentarios.
        obj.addCommentById = function (id) {
            messages[id].comments += 1;
            obj.calcRelevanceById(id);
            obj.UpdateMessagesById(id);
        };

        //Aumenta el contador de likes.
        obj.addLikesById = function (id) {
            messages[id].likes += 1;
            obj.calcRelevanceById(id);
            obj.UpdateMessagesById(id);
        };

        //Carga inicial de todos los mensajes.
        obj.LoadMessages = function () {

            messages = [];

            $http.post('http://localhost:9000/services/getMessageList', {data: 1}, {headers: {'Content-Type': 'application/json; charset=utf-8'}})
                .success(function (data) {

                    _.each(data, function (d) {

                        var index = messages.push({
                            index: 0,
                            id: d.id,
                            name: d.name,
                            text: d.text,
                            date_time: new Date(d.date_time),
                            likes: d.likes,
                            comments: d.comments,
                            relevance: 0
                        }) - 1;

                        obj.dateHandle(index);
                        obj.calcRelevanceById(index);
                    })
                })
        };

        //Graba un set de mensajes en la BBDD.
        obj.SaveMessages = function () {

            var arr = obj.GetMessages();
            $http.post('http://localhost:9000/services/saveMessageList', arr)
                .success(function (data) {
                })
        };

        //Graba un mensajes en la BBDD.
        obj.SaveMessagesById = function (id) {

            var arr = [];
            arr.push(messages[id]);
            $http.post('http://localhost:9000/services/saveMessageList', arr)
                .success(function (data) {
                    messages[id].id = data[0].id;
                })
        };

        //Actualiza un mensaje en la BBDD.
        obj.UpdateMessagesById = function (id) {

            var arr = [];
            arr.push(messages[id]);
            $http.post('http://localhost:9000/services/updateMessageList', arr)
                .success(function (data) {
                })
        };

        //Calcula la relevancia de un mensaje.
        obj.calcRelevanceById = function (id) {
            messages[id].relevance = messages[id].comments;
            messages[id].relevance *= 2;
            messages[id].relevance += messages[id].likes;
        };

        //Calcula campos relacionados con la fecha que facilitan la gestión.
        obj.dateHandle = function (id) {
            messages[id].index = id;
            messages[id].date = messages[id].date_time.toString("d/M/yyyy");
            messages[id].time = messages[id].date_time.toString("HH:mm");
            messages[id].date_time_to_save = messages[id].date_time.toString("yyyy-MM-dd");
            messages[id].date_time_to_save += " ";
            messages[id].date_time_to_save += messages[id].date_time.toString("HH:mm:ss");
        };

        return obj;

    } ]);