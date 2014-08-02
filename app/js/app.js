angular.module('myWall', [ 'ngRoute', 'app.Controllers', 'app.Directives', 'app.Factory'])

    .config([ '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/partials/index2.html',
                controller: 'index2'
            })
            .when('/status/:message', {
                templateUrl: 'app/partials/status.html',
                controller: 'statusCtrl'
            })
            .when('/messagesByUser/:userName', {
                templateUrl: 'app/partials/MessagesByUser.html',
                controller: 'messagesByUser'
            })
            .otherwise({
                redirectTo: '/'
            });
    } ]);