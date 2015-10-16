var React = require('react');

var ButtonComponent = React.createClass({

  propTypes: {
      className: React.PropTypes.string,
      type: React.PropTypes.string,
      spamClass: React.PropTypes.string
  },

  getDefaultProps: function () {
    return this.getProps;
  },

  getProps: function () {
    return {
        className: 'btn btn-default btn-sm',
        type: 'button',
        spamClass: '',
    };
  },

  render: function () {
    return (
      <button {...this.props}>
        <span className={this.props.spamClass}></span> 
      </button>
    )
  }

});

module.exports = ButtonComponent;

