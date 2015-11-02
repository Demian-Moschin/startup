var classNames = ('classnames');
var React = require('react');

var ButtonComponent = React.createClass({

    propTypes: {
        className: React.PropTypes.string,
        type: React.PropTypes.string,
        spanClass: React.PropTypes.string
    },

    getDefaultProps: function () {
        return this.getProps;
    },

    getButtonProps: function () {
        return {
            className: 'btn btn-default btn-sm',
            type: 'button'
        };
    },

    getSpanProps: function () {
        var spanClass = classNames({
            'glyphicon': true,
            'glyphicon-align-left': true
        });

        return spanClass;
    },

    render: function () {
        return (
            <button {...this.getButtonProps}>
                <span className={this.getSpanProps}></span>
            </button>
        )
    }

});

module.exports = ButtonComponent;

