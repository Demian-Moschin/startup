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

  getTitle : function () {
     console.log(this.title);
  }, 

  setTitle :function (argTitle) {
    this.title = argTitle;
      
  },
  getDuration : function () {
    console.log(this.duration);
  }, 

  setDuration :function (argDuration) {
    this.duration = argDuration ;
  },
  getDirector : function () {
    console.log(this.director);
  }, 
  setDirector :function (argDirector) {
    this.director = argDirector ;
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
movie1.getTitle();
movie1.play();

var movie2 = new Movie({title: 'IronMan2', director: 'Bon Jovi'});
movie2.getDirector();
movie2.getTitle();
movie2.play();