var React = require('react');
var MovieListComponent = require('../components/movie-list.js');

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
      <MovieListComponent  />
    );
  }

});

module.exports = MovieListView;
