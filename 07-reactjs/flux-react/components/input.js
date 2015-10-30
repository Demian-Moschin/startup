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

    getInputProps: function () {
        return({
            type: this.props.type,
            required: this.props.required,
            onChange: this.props.onChange,
            onBlur: this.props.onBlur
        });
    },

    render: function () {
        var inputClass = classNames (
            {
                'form-control' : true,
                'input-text': true
            }
        );

        return (
            <input className={inputClass} {...this.getInputProps()}/>
        );
    }

});

module.exports = Input;
