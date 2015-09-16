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
}
Movie.prototype = {
  constructor: Movie,
  get:function(atribute) {
     return this.atributes[atribute];
  }, //end get

  set:function(atribute, value) {
    this.atributes[atribute] = value;
      
  },//end set

  play:function(){
    console.log('I am a movie. This is my title: ' + this.atributes['title']);
    this.observer.playing(this.atributes['title']);
  },//end play

  stop:function(){
    this.observer.stopped(this.atributes['title']);
  }//end stop


}// end Movie.prototype


varMovie = new Movie();
varMovie.set('title','Pirates of the Sillicon Valley');
varMovie.play();
varMovie.stop();
