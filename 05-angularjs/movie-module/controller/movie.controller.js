(function () {

  var  appCtrl = angular.module('movie-controller', []);

  appCtrl.controller('MovieController',['$http',function ($http){
  	var ctrl = this;
    ctrl.movies = [];
    
  	$http.get('./data/movies.json').success(function (data) {
      ctrl.movies = data;
  	});

  }]);

})();
