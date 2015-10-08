var React = require('react');

var ButtonComponent = React.createClass({

  getButtonProps: function () {
    return{
        className: 'btn btn-default btn-sm',
        type: 'submit'
    }
  },

  render: function () {
    return (
      <button {...this.getButtonProps()}>
       <span className="glyphicon glyphicon-ok-circle"></span> 
      </button>
      )
  }

});

module.exports = ButtonComponent;

