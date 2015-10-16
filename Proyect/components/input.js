var React = require('react');
var _ = require('lodash');

// Component
var Input = React.createClass({

  getInitialState: function () {
    var initialState = {};

    if ((_.isUndefined(this.props.value))) {
        initialState.value = this.props.defaultValue
    }
    return initialState;
  },

  render: function () {
    return (
        <input {...this.getProps()} />
    );
  },

  getProps: function () {
    return {
        className: 'form-control',
        type: 'text',
        required:'required',
        placeholder: this.props.placeholder,
        ref: this.props.ref
    };
  }
});

module.exports = Input;
