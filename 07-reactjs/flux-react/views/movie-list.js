var React = require('react');
var MovieListComponent = require('./components/movie-list');

var MovieListView= React.createClass({
  
  render: function () {
    return (
      <div>
        <h2>Movie lists</h2>
        {this.renderList()}
      </div>
    );
  },

  renderList: function () {
    return (
      <MovieList  />
    );
  }

});

module.exports = MovieListView;
