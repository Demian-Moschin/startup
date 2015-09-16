function Movie() {
  this.atributes = new Array();
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
    console.log('Playing' + this.atributes['title']);
    
  },//end play

  stop:function(){
    
  }//end stop


}// end Movie.prototype



varMovie = new Movie();
varMovie.set('title','Pirates of the Sillicon Valley');
varMovie.get('title');

