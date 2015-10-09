var  MovieNewComponent = require('../components/movie-new.js');
var React = require('react');

var NewMovie = React.createClass({


  render: function () {
    return (
      <div>
        <h2>New Movies</h2>
        <MovieNewComponent />
      </div>  
    );
  }
});

module.exports = MovieNewComponent;
