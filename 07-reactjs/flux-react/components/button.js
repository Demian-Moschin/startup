var React = require('react');

var ButtonComponent = React.createClass({

  getButtonProps: function () {
    return{
        className: 'btn btn-default',
        type: 'button'
      }
  },

  render: function () {
    return (
      <button  {...this.getButtonProps()}>Create Movie</button>
    )
  }

});

module.exports = ButtonComponent;

