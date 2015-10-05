var AppDispatcher = require('./dispatcher/app-dispatcher');
var MovieConstants = require('./constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

var MovieStore = function() {
  this.state = this.getInitialState();
};

inherits(MovieStore, EventEmitter);

MovieStore.prototype.getInitialState = function () {
  return {
    _movies: []
  };
};

MovieStore.prototype.addMovie = function (movie) {
  _movies.list.push(movie);
};

MovieStore.prototype.removeMovie = function (index) {
  _movies.list.splice(index, 1);
};

MovieStore.prototype.getAll = function () {
  return _movies;
};
MovieStore.prototype.emitChange = function (){
  this.emitChange('change');
};

MovieStore.prototype.addActionListener = function(action, callback) {
  this.on(action, callback);
};

MovieStore.prototype.removeActionListener = function(action, callback) {
  this.removeListener(action, callback);


  // Register callback with AppDispatcher
  AppDispatcher.register(function (payload) {
    var action = payload.action; // this is our action from handleViewAction

    switch(action.actionType) {

      // Respond to MOVIE_ADDED action
      case MovieConstants.MOVIE_ADDED:
        addMovie(action.movie);
        break;
      // Respond to MOVIE_DELETED action
      case MovieConstants.MOVIE_DELETED:
        removeMovie(action.index);
      break;

      default:
        return true;
    }

    // If action was responded to, emit change event
    ProductStore.emitChange();

    return true;

  });

};
