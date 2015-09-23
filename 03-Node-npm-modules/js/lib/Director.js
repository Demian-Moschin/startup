var Director = function (name) {
    this.name = name;
    this.quotes = [];
};

Director.prototype = {
  contructor : Director, 
  get : function (property) {
    return this[property];
  }, 
  set :function (property, value) {
    this[property] = value; ;
  },
  speak : function () {
    var sentence = '';
    sentence = this.quotes.join(',')
    console.log(this.name + ' says :' + sentence);
  }
};

exports.Director = Director;