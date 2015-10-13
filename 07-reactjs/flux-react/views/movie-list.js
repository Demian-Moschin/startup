var React = require('react');
var MovieListComponent = require('../components/movie-list.js');
var MovieStore = require('../stores/movie-store.js');
var MovieStoreActions = require('../actions/movie-store-actions.js');

var MovieListView= React.createClass({

  getInitialState: function () {
    return {
     movies: MovieStore.getAll()
    };
  },

  componentWillMount: function () {
      MovieStore.addActionListener(MovieStoreActions.CHANGE_EVENT, this.updateMovies);
  },

  componentWillUnmount: function () {
      MovieStore.removeActionListener(MovieStoreActions.CHANGE_EVENT, this.updateMovies);
  },

  updateMovies: function () {
    this.setState(this.getInitialState());
  },
  
  render: function () {
    return (
      <div>
        <h2>Movie lists</h2>
        {this.renderList()}
      </div>
    )
  },

  renderList: function () {
    return (
    <MovieListComponent movies = {this.state.movies}  />
    )
  }

});

module.exports = MovieListView;
