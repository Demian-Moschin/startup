var React = require('react');
var Router = require('react-router');

var RealmList = React.createClass({

  getDefaultProps: function () {
    return {
      realmCollection: []
    }
  },
  createTableBodyNodes: function () {
    var nodes = this.props.realmCollection.map(this.renderRows);
    return nodes;
  },

  renderRows: function (realm, index) {
    return (
        <tr key={index}>
            <td>{realm.name}</td>
            <td>{realm.status.toString()}</td>
            <td>{realm.battlegroup}</td>
        </tr>
    );
  },

  createTableDataHeaders: function () {
    return (
        <tr>
          <th>Realm Name</th>
          <th>Status</th>
          <th>Battle Group</th>
        </tr>
    );
  },

  render: function () {
    return (
      <div className="table-responsive">
        <h2>Realms status</h2>
        <table className="table table-striped" >
          <thead>
            {this.createTableDataHeaders()}
          </thead>
          <tbody>
            {this.createTableBodyNodes()}
          </tbody>
        </table>
      </div>
    )
  }

});

module.exports = RealmList;
