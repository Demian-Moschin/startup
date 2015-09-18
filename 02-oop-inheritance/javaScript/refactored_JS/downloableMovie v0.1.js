var movieObserver = function ( ) {
  this.playing = function (title) {
    console.log('A movie with title ' + title + ' has been played');
  } 
  this.stopped = function( title ) {
    console.log('A movie with title ' + title + ' stopped');
  } 
}//end movieObserver

var movie = function ( paramName, paramValue ) {
  //Variables
  this.attributes = [];
  this.attributes[paramName] = paramValue; 
  this.observer = new movieObserver();
}//end movie constructor

movie.prototype = {
  
  get: function (atribute) {
     return this.attributes[atribute];
  }, //end get

  set:function (atribute, value) {
    this.attributes[atribute] = value;
      
  },//end set

  play:function () {
    console.log('This is Movie.play method: I am a movie. This is my title: ' + this.attributes['title']);
    this.observer.playing(this.attributes['title']);
  },//end play

  stop:function () {
    this.observer.stopped(this.attributes['title']);
  }//end stop

}// end movie.prototype


var downloableMovie  = function ( paramName, paramValue ) {
  movie.call(this, paramName,paramValue);
}
downloableMovie.prototype = new movie();

/**
*Augment existing 'class' with a method from another.
*This function is courtesy of Addy Osmani
* From the book JavaScript Design Patterns
*/
var augment= function ( receivingClass, givingClass ) {
  // only provide certain methods
  if ( arguments[2] ) {
    for (var i=2, len=arguments.length; i<len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }//end for
  }//end if
  // provide all methods
  else {
    for ( var methodName in givingClass.prototype ) {
      /* check to make sure the receiving class doesn't
      have a method of the same name as the one currently
      being processed */
      if ( !receivingClass.prototype[methodName] ) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }// end if
    }//end for
  }//end else
}//end function

//Mixin Object() 
var Social = function(){};
Social.prototype = {
    share: function (friendName){
      return 'Sharing : ' + this.attributes.title + ' with ' + friendName; 
    },//end play
    like: function(){
    }//end like
}//end Social

//use of Mixin function
augment(movie,Social);

var mov = new movie('title', 'Pirates of the Sillicon Valley');
var downMovie = new  downloableMovie('title', 'Online: Batman of the Future');

console.log(downMovie.attributes.title);
mov.share('Gaston')
