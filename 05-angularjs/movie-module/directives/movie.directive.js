var newMovie = angular.module('newMovie', []).directive('newMovie', function() {
    return {
      restrict: 'E',
      templateUrl: 'movie-module/views/movie-new.html'
    };
});


var movieList = angular.module('movieList', []).directive('movieList', function() {
    return {
      restrict: 'E',
      templateUrl: 'movie-module/views/movie-list.html'
    };
});