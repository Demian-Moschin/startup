var app = angular.module('appMovie', []);

app.directive('newMovie', function() {
    return {
      templateUrl: 'new-movie.html'
    };
});
