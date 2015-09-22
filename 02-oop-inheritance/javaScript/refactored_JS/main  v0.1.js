var MovieObserver = function ( ) {};
MovieObserver.prototype.playing = function ( title ) {
    console.log('A movie with title ' + title + ' has been played');
};
MovieObserver.prototype.stopped = function( title ) {
    console.log('A movie with title ' + title + ' stopped');
};

var Movie = function (paramName, paramValue) {
  //Variables
  this.attributes = [];
  this.attributes[paramName] = paramValue; 
  
};//end movie constructor

Movie.prototype = {

  observer : new MovieObserver(), 
  
  get : function (atribute) {
     return this.attributes[atribute];
  }, 

  set :function (atribute, value) {
    this.attributes[atribute] = value;
      
  },

  play :function () {
    console.log('This is Movie.play method: I am a movie. This is my title: ' + this.attributes['title']);
    this.observer.playing(this.attributes['title']);
  },

  stop :function () {
    this.observer.stopped(this.attributes['title']);
  }

};

var movie1 = new Movie('title', 'ironMan');
movie1.get('title');
movie1.set('mainActor', 'Al Pacino');
movie1.get('mainActor');
movie1.play()
