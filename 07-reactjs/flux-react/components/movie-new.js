var React = require('react');

var MovieNewComponent = React.createClass({

  save: function () {
    alert('Test method: put logic to create movie here!');
  },

  getInputProps: function () {
    return {
      className: 'form-control',
      type: 'text',
      required: 'required',
      value: this.value
    }
  },

  getFormProps: function () {
    return {
      className: 'form-inline',
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
        <form {...this.getFormProps()}>
          <div className="form-group">
            <label htmlFor="movie-text">Movie title:</label>
            <input {...this.getInputProps()} ref="inputTextMovieTitle" placeholder="Title" required />
          </div>   
          <div className="form-group">
            <label htmlFor="movie-text">Movie Director:</label>
            <input {...this.getInputProps()} ref="inputTextMovieDirector" placeholder="Director" required />
          </div>   
          <div className="form-group">
            <label htmlFor="movie-text">Movie Duration:</label>
            <input {...this.getInputProps()} ref="inputTextMovieDuration" placeholder="Movie Duration" required/>
          </div>             
          <ButtonComponent />
        </form>
      </div>
    )
  }

});

module.exports = MovieNewComponent;