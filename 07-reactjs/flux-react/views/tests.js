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
            <Button {...this.getButtonProps()} onClick={this.handleClick} />
            <Input ref="txtInput" onChange = {this.handleInputChange}/>
            {this.state.lblText}
          </div>
        );
    },

    handleInputChange: function () {
        var txt = this.refs.txtInput.getDOMNode().value;

        this.setState({
            lblText: txt
        });
    },

    handleClick: function () {
      console.log('button clicked');
    },

    getButtonProps: function () {
        return {
            spamClass: 'glyphicon glyphicon-ok-circle',
            type:'button'
        }
    }


});

module.exports = Tests;