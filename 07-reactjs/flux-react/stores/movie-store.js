var actions = require('../actions/movie-store-actions');
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');
var _ = require('lodash'); //Array manager library

var MovieStore = function() {
  this.state = this.getInitialState();
};

inherits(MovieStore, EventEmitter);

MovieStore.prototype.getInitialState = function () {
  return {
    movies: []
  };
};

MovieStore.prototype.addMovie = function (movie) {
  this.setState({movies: this.state.movies.concat([movie])});
};

MovieStore.prototype.deleteMovie = function (index) {
  var splicedMovies = this.state.movies;
  splicedMovies.splice(index, 1);
  this.setState({movies: splicedMovies});
};

MovieStore.prototype.getAll = function () {
  return this.state.movies;
};

MovieStore.prototype.setState = function (newState, callback) {
    _.extend(this.state, newState);

    this.emit(actions.CHANGE_EVENT);

    if (callback) {
        callback();
    }
};

MovieStore.prototype.addActionListener = function(action, callback) {
  this.on(action, callback);
};

MovieStore.prototype.removeActionListener = function(action, callback) {
  this.removeListener(action, callback);
};

module.exports = new MovieStore();
