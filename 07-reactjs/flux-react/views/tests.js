var React = require('react');
var Button = require('../components/button-small');
var Input = require('../components/input');
var moment = require('moment');

var Tests = React.createClass({

    getInitialState: function () {
        return {
            lblText: ''
        }
    },

    render: function () {

        return (
            <div>
                <p>This is a paragraph</p>
                <Button {...this.getButtonProps()} />
                <Input {...this.getInputProps()}/>
                {this.state.lblText}
            </div>
        );
    },

    handleOnBlur: function () {
        console.log('bluring');
    },

    handleInputChange: function () {
        var txt = this.refs.txtInput.getDOMNode().value;
        this.setState({
            lblText: txt
        });

        console.log(txt);
    },

    handleClick: function () {
        console.log('button clicked');
    },

    getButtonProps: function () {
        return {
            spamClass: 'glyphicon glyphicon-ok-circle',
            type:'button',
            onClick: this.handleClick
        };
    },

    getInputProps: function () {
        return {
            required: 'required',
            type: 'text',
            ref: 'txtInput',
            onChange: this.handleInputChange,
            onBlur: this.handleOnBlur
        };
    }

});

module.exports = Tests;