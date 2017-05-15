var app = angular.module('StarWarsApp', ['StarWarsCtrls', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    // define routes
    $stateProvider
        .state('films', {
            url: '/',
            templateUrl: 'views/films.html',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('showFilm', {
            url: '/films/:id',
            templateUrl: 'views/filmShow.html',
            controller: 'FilmShowCtrl'
        });

}]);
