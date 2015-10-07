(function () {

  var  appCtrl = angular.module('movie-controller', []);

  appCtrl.controller('MovieController',['$scope','$http',function ($scope, $http){
    var ctrl = this;
    ctrl.movies = [];

    //Let's find out if there's any object in my localStorage. If so, populate movies.
    if(ctrl.movies.length === 0 && localStorage.length > 0){
      for(var i = 0 ; i< localStorage.length; i++){
        var movie = JSON.parse(localStorage.getItem(i));
        this.movies.push(movie);
      };
    };
    
    //this method will be deprecated. 
    this.getJSONMovies = function () {
      $http.get('./data/movies.json').success(function (data) {
        ctrl.movies = data;
      });
    };

    this.addMovie = function () {
      var newMovie = {title: $scope.movieTitle, director: $scope.movieDirector};
      this.movies.push(newMovie);
      localStorage.setItem(this.movies.length-1 ,JSON.stringify(newMovie));
      $scope.movieTitle = $scope.movieDirector = '';
    };
    
    this.removeMovie = function (index) {
      this.movies.splice(index, 1);
      localStorage.removeItem(index);
    };

  }]);

})();
