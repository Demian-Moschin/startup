var React = require('react');
var Router = require('react-router');
var Input = require('./input.js');

var CharacterInfo = React.createClass({

    getDefaultProps: function () {
        return {
            characterInfo: []
        }
    },

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
          id: 'characterNameInput'
      }
    },

    render: function () {
        return (
            <div className="table-responsive">
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
                            <Input {...this.getInputCharacterProps} />
                        </div>
                    </form>
                </div>

            </div>
        )
    }

});

module.exports = CharacterInfo;
