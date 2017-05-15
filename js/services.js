var services = angular.module('StarWarsServices', ['ngResource']);

services.factory('FilmsFactory', ['$resource', function($resource) {
    // use the colon syntax to specify the id parameter in the url.
    var url = 'http://swapi.co/api/films/:id';

    return $resource(url, {}, {
        // overwrite the isArray value when querying for movies
        query: { isArray: false }
    });
}]);
