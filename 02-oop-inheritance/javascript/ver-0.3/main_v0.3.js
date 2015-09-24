var MovieObserver = function ( ) {};
MovieObserver.prototype.playing = function (title) {
    console.log('A movie with title ' + title + ' has been played');
};
MovieObserver.prototype.stopped = function(title) {
    console.log('A movie with title ' + title + ' stopped');
};


var Movie = function (optParams) {
  this.title = optParams.title;
  this.duration = optParams.duration; 
  this.director = optParams.director;
  this.observer = new MovieObserver();
};

Movie.prototype = {
  constructor : Movie,

  get: function (property) {
    console.log(this[property]);
  },
  set : function (property, value) {
    this[property] = value;
  },

  play :function () {
    console.log('This is Movie.play method: I am a movie. This is my title: ' + this.title);
    this.observer.playing(this.title);
  },

  stop :function () {
    this.observer.stopped(this.title);
  }
};

var movie1 = new Movie({title:'ironMan'});
movie1.get('title');
movie1.set('director', 'Martin Scorcesse');
movie1.play();

var movie2 = new Movie({title: 'IronMan2', director: 'Bon Jovi'});
movie2.play();
movie2.set('duration', '2 hours');
movie2.get('duration');