var React = require('react');
var Router = require('react-router');
var Input = require('./input.js');
var classNames = require('classnames');

var CharacterInfo = React.createClass({

    renderRows: function () {
        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    },

    createTableDataHeaders: function () {
        return (
            <tr>
                <th>Name</th>
                <th>stamina</th>
                <th>achievements</th>
            </tr>
        );
    },

    getInputCharacterProps: function () {
      return {
          placeholder: 'Character name',
          ref: 'characterNameInput',
          onChange: this.handleInputChange()
      }
    },

    render: function () {

        var infoClass = classNames({
           display: (this.props.infoVisible? 'hidden': 'block'),
           'table-responsive': true
        });

        return (
            <div className= {infoClass}>
                <h2>Character Info .. : </h2>
                <div className="col-md-8 pull-right">
                    <table className="table table-striped" >
                        <thead>
                            {this.createTableDataHeaders}
                        </thead>
                        <tbody>
                            {this.createTableBodyNodes}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-4 pull-left">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="inputCharacterName">Name</label>
                            <Input {...this.getInputCharacterProps}  />
                        </div>
                    </form>
                </div>

            </div>
        );
    },

    handleInputChange: function () {
        console.log('handled input changed') ;
    }

});

module.exports = CharacterInfo;
