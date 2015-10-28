var React = require('react');

var FormGroupComponent = React.createClass({

  getFormGroupProps: function () {
    return{
      className: 'form-group'
    }
  },

  render: function () {
    return (
      <div {...this.getFormGroupProps()} >
        {this.props.children}
      </div>   
    )
  }

});

module.exports = FormGroupComponent;