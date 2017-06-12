angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, SpotifyService) {

        $scope.searchShow = () => {
            $scope.items = null
            $scope.artists = null
            SpotifyService.search.get({
                show: $scope.showname
            }, (response) => {
                $scope.results = response.artists.items

                console.log(response.artists.items)
            })
        }


        $scope.showDetails = (id, images) => {
            $scope.id = id
            $scope.images = images
            $scope.results = null
            SpotifyService.artists.get({
                artists: $scope.id
            }, (response) => {
                $scope.items = response.items
                $scope.artistname = response.items[0].artists[0].name
                console.log(response.items)
            })
        }
    })

    .directive('renderdetails', function()  {

        return {
            templateUrl: 'views/directive.html'
        }
    })