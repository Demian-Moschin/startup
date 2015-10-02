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

MovieStore.prototype.addMovie = function(movie) {
  _movies.list.push(movie);
};

MovieStore.prototype.removeMovie = function(index) {
  _movies.list.splice(index, 1);
};

MovieStore.prototype.getAll = function() {
  return _movies;
};

/***
* TODO : IMPLEMENT THIS CODE IN NEXT COMMIT
*
*var MovieStore = objectAssign({}, EventEmitter.prototype, {
*  addChangeListener: function(callback) {
*   this.on('change', callback);
*  },
*  removeChangeListener: function(callback) {
*    this.removeListener('change', callback);
*  },
*  getAll: function(){
*    return _movies;
*  },
*  emitChange: function() {
*    this.emit('change')
*  }
*});
*/
