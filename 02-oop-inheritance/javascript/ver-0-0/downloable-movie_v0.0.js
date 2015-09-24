function MovieObserver() {

  this.playing = function (title) {
    console.log('A movie with title ' + title + ' has been played');
  } 
  this.stopped = function(title) {
    console.log('A movie with title ' + title + ' stopped');
  } 
}

function Movie() {
  this.atributes = new Array();
  this.observer = new MovieObserver();
}//end constructor

Movie.prototype = {
  constructor: Movie,
  get: function(atribute) {
     return this.atributes[atribute];
  }, //end get

  set:function(atribute, value) {
    this.atributes[atribute] = value;
      
  },//end set

  play:function(){
    console.log('This is Movie.play method: I am a movie. This is my title: ' + this.atributes['title']);
    this.observer.playing(this.atributes['title']);
  },//end play

  stop:function(){
    this.observer.stopped(this.atributes['title']);
  }//end stop

}// end Movie.prototype


//Movie - subclass
function DownMovie() {
  Movie.call(this); // call super constructor.
}
// subclass extends superclass
DownMovie.prototype = Object.create(Movie.prototype);
DownMovie.prototype.constructor = Movie;
DownMovie.prototype.newMethod = function(){console.log('downMovie method');};//end newMethod
DownMovie.prototype.play = function(){console.log('Play method override. (by Movie subclass)');};//end play


varMovie = new Movie();
varMovie.set('title','Pirates of the Sillicon Valley');
varMovie.play();
varMovie.stop();

varMovie2 = new DownMovie();
varMovie2.set('title', 'The Godfather, part III');
varMovie2.play();
varMovie2.stop();
varMovie2.newMethod();