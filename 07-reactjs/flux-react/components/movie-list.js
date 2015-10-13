var React = require('react');
var MovieStore = require('../stores/movie-store.js');
var Router = require('react-router');
var ButtonComponent = require('./button-small.js');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var MovieListComponent = React.createClass({

  getDefaultProps: function () {
    return {
      movies: [],
    }
  },

  createMovieNodes: function () {
    var nodes = this.props.movies.map(this.renderMovieRow);
    return nodes;
  },

  renderMovieRow: function (movie, index) {
    return (
        <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.duration}</td>
            <td>{movie.director}</td>
            <td>
              <ButtonComponent {...this.getButtonRemoveProps()} onClick = {this.handleDeleteMovie.bind(this,index)} />
            </td>
            <td>
              <Link to="new">
                <ButtonComponent {...this.getButtonEditProps()} onClick = {this.handleEditMovie.bind(this,movie)} />
              </Link>
            </td>
        </tr>
    );
  },

  getButtonRemoveProps: function () {
    return {
      type:'button',
      spamClass: 'glyphicon glyphicon-remove-circle'
    }
  },

  getButtonEditProps: function () {
    return {
      type:'button',
      spamClass: 'glyphicon glyphicon-edit'
    }
  },

  handleDeleteMovie: function (index) {
    console.log('You have deleted a movie. ');
    MovieStore.deleteMovie(index);
  },

  handleEditMovie: function (movie) {
    console.log('Edit Movie please');
  },
  
  render: function () {
    return (
      <div className="table-responsive">
        <table className="table table-striped" >
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {this.createMovieNodes()}
          </tbody>
        </table>
      </div>
    )
  }

});

module.exports = MovieListComponent;
