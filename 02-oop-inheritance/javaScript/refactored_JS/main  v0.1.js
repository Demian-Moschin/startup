var movieObserver = function () {
  this.playing = function ( title ) {
    console.log('A movie with title ' + title + ' has been played');
  } 
  this.stopped = function( title ) {
    console.log('A movie with title ' + title + ' stopped');
  } 
}


var movie = function (paramName, paramValue ) {
  //Variables
  this.attributes = [];
  this.attributes[paramName] = paramValue; 
  this.observer = new movieObserver();
  //Functions
  this.get = function (paramName ) {
      console.log(this.attributes[paramName]);
  }

  this.set = function (paramName, paramValue ) {
      this.attributes[paramName]= paramValue;
  }
  this.play = function () {
      this.observer.playing(this.attributes['title']);
  }
  this.stop = function () {
      this.observer.stopped(this.attributes['title']);
  }
}

var movie1 = new movie('title', 'ironMan');
movie1.get('title');

movie1.set('mainActor', 'Al Pacino');
movie1.get('mainActor');
movie1.play()




