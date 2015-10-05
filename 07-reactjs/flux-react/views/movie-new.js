var ButtonComponent = require('./components/button');
var React = require('react');

var NewMovie = React.createClass({

  getInitialState: function() {
    return {
      value: ''
    };
  },

  save: function () {
    alert('Test method: put logic to create movie here!');
  },

  getInputProps: function () {
    return {
      className: 'form-control',
      type: 'text',
      value: this.value
    }
  },

  getFormProps: function () {
    return {
      className: 'navbar-form navbar-left',
      onSubmit: this.formSubmit
    }
  },

  formSubmit: function (event) {
    event.preventDefault();
    this.save();
  },

  render: function () {
    return (
      <div>
        <h2>New Movies</h2>
        <form {...this.getFormProps()}>
          <div className="form-group">
            <input {...this.getInputProps()} id="inputTextMovieName" placeholder="Movie name" />
            <input {...this.getInputProps()} id="inputTextMovieDirector" placeholder="Director" />
            <input {...this.getInputProps()} id="inputTextMovieDuration" placeholder="Duration" />
          </div>
        </form>
      </div>
    );
  }
});

module.exports = NewMovie;
