var React = require('react');
var _ = require('lodash');
var classNames = require('classnames');

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
    var inputClass = classNames (
      {
          'form-control' : true,
          type: 'text',
          required: true,
          placeholder: this.props.placeholder,
          ref: this.props.ref,
          'input-text': true
      }
    );

    return (
        <input className={inputClass} onChange={this.props.onChange}/>
    );
  }

});

module.exports = Input;
