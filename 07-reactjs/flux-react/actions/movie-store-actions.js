var AppDispatcher = require('./dispatcher/app-dispatcher');
var AppConstants = require('./constants/app-constants');

var MovieActions = function () {};

MovieActions.prototype.add = function (movie) {
  AppDispatcher.handleAction({
    actionType: AppConstants.MOVIE_ADDED,
    movie: movie
  });
};
MovieActions.prototype.delete = function (index) {
  AppDispatcher.handleAction({
    actionType: AppConstants.MOVIE_DELETED,
    index: index
  });
};
MovieActions.prototype.change = function (movie) {
	//TODO IN NEXT COMMIT
};

module.exports = new MovieActions();
