var  MovieNewComponent = require('../components/movie-new.js');
var React = require('react');

var NewMovie = React.createClass({


  render: function () {
    return (
      <h2>New Movies</h2>
      <MovieNew />

    );
  }
});

module.exports = MovieNewComponent;
