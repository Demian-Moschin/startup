
function MovieObserver() {

  this.playing = function (title) {
    console.log('A movie with title ' + title + ' has been played');
  } 
  this.stopped = function(title) {
    console.log('A movie with title ' + title + ' stopped');
  } 
}






//Module Movie

var MovieModule =  function() {
  //Private variables
  var atributes = new Array();
  var observer = new MovieObserver();

  //private methods
  var getAtributte = function(atribute) {
    return atributes[atribute];
  }; //end get

  var setAtributte = function(atribute, value) {
    atributes[atribute] = value;
  };//end set

  var play = function(){
    console.log('I am a movie. This is my title: ' + atributes['title']);
    observer.playing(atributes['title']);
  };//end play

  var stop = function(){
    observer.stopped(atributes['title']);
  };//end stop

  //public API
  return {
    get: getAtributte,
    set: setAtributte,
    play: play,
    stop: stop
  };//end return 
};//end Movie


//Passing a named function instead of an anonymous function 
varMovie = MovieModule();
varMovie.set('title','Pirates of the Sillicon Valley');
varMovie.play();
varMovie.stop();