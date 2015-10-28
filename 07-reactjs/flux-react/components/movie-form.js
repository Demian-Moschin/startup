var MovieStore = require('../stores/movie-store.js');
var React = require('react');
var ButtonComponent = require('./button-small.js');
var FormGroupComponent = require('./form-group.js');
var Input = require('./input.js');

var MovieFormComponent = React.createClass({

  save: function () {
    var objMovie = {
      title: this.refs.inputTextMovieTitle.getDOMNode().value,
      duration: this.refs.inputTextMovieDuration.getDOMNode().value,
      director: this.refs.inputTextMovieDirector.getDOMNode().value
    }
    MovieStore.addMovie(objMovie);
    
  },

  getInputTitleProps: function () {
    return {
      placeholder: "Title",
      ref: "inputTextMovieTitle"
    }
  },

  getInputDirectorProps: function () {
    return {
      placeholder: "Director",
      ref: "inputTextMovieDirector"
    }
  },

  getInputDurationProps: function () {
    return {
      placeholder: "Duration",
      ref: "inputTextMovieDuration"
    }
  },

  getFormProps: function () {
    return {
      onSubmit: this.handleSubmit
    }
  },

  frmClass: function () {
    return {
      'form-inline': true
    }
  },
  handleSubmit: function (event) {
    event.preventDefault();
    console.log(' en  button-small formsubmit');
    this.save();
    this.clearForm();
  },

  clearForm: function () {
    this.refs.inputTextMovieDirector.getDOMNode().value = '';
    this.refs.inputTextMovieTitle.getDOMNode().value = '';
    this.refs.inputTextMovieDuration.getDOMNode().value = '';
  },

  getButtonProps: function () {
    return {
      spamClass: 'glyphicon glyphicon-ok-circle',
      type:"submit"
    } 
  },

  inputOnChange: function () {
    console.log('');
    console.log('helloggg');
  },

  render: function () {
    return (
      <div>
        <form className={this.frmClass} {...this.getFormProps()}>
          <FormGroupComponent>
            <label htmlFor="movie-text">Movie title:</label>
            <Input {...this.getInputTitleProps()} onChange ={this.inputOnChange}/>
          </FormGroupComponent>   
          <FormGroupComponent>
            <label htmlFor="movie-text">Movie Director:</label>
            <Input {...this.getInputDirectorProps()}  />
          </FormGroupComponent>   
          <FormGroupComponent>
            <label htmlFor="movie-text">Movie Duration:</label>
            <Input {...this.getInputDurationProps()} />
          </FormGroupComponent>             
          <ButtonComponent {...this.getButtonProps()}/>
        </form>
      </div>
    )
  }
});

module.exports = MovieFormComponent;
