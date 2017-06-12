angular.module('TVMazeSrvc', [])
    .factory('SpotifyService', function($resource) {
        return {
            search: $resource('/api/search'),
            artists: $resource('/api/artists')
         }
    })






