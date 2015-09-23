//------------------------------- Imported    Modules//
var Director = require('./Director.js').Director;
var $ = require('./jquery.js').$;
//-------------------------------------------------//

var MovieObserver = function ( ) {};
MovieObserver.prototype.playing = function (title) {
    console.log('A movie with title ' + title + ' has been played');
};
MovieObserver.prototype.stopped = function(title) {
    console.log('A movie with title ' + title + ' stopped');
};

var Movie = function (title) {
  this.title = title;
  this.duration = ''; 
  this.director = new Director('');
  this.observer = new MovieObserver();
};

Movie.prototype = {
  constructor : Movie,
  get : function (property) {
    return this[property];
  }, 
  set :function (property, value) {
    this[property] = value; ;
  },
  play :function () {
    console.log('This is Movie.play method: I am a movie. This is my title: ' + this.title);
    this.observer.playing(this.title);
  },
  stop :function () {
    this.observer.stopped(this.title);
  }
};

var alien = new Movie('Alien');
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('Director', ridleyScott);
alien.get('Director').speak(); //output: Ridley Scott says: 'Cast is...'