var React = require('react');
var RealmList = require('../components/realm-list.js');
var API = require('../API/battle-net.js');

var RealmListView= React.createClass({

  getInitialState: function () {
    return {
      dataCollection: {}
    };
  },

  updateCollection: function (data) {
    this.setState({
      dataCollection: data
    });
  },

  componentDidMount: function () {
    API.getRealm(this.updateCollection) ;
  },

  render: function () {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  },

  getListProps: function () {
    return {
      dataCollection: this.state.dataCollection,
      tableTitle: 'Realms Status . . : '
    }
  },

  renderList: function () {
    return (
    <RealmList {...this.getListProps()} />
    )
  }

});

module.exports = RealmListView;
