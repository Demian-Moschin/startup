var React = require('react');

var ButtonComponent = React.createClass({

  getButtonProps: function () {
    return{
        className: 'btn btn-default',
        type: 'button'
    }
  },

  createMovie: function () {
    alert('button clicked');
  },

  render: function () {
    return (
      <button  {...this.getButtonProps()} onClick={this.createMovie}>Create Movie</button>
    )
  }

});

module.exports = ButtonComponent;

