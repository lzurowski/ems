var app = angular.module('app', ['ngRoute', 'ngAnimate','ngTouch', 'ui.bootstrap']);

app.value('app-version', '0.0.1');

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            controller: 'SiteMainCtrl',    
            templateUrl: 'app/views/site/main.html'
        })        
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise({redirectTo: '/404'})
    ;

    //$locationProvider.html5Mode(true).hashPrefix('!');
}]);

