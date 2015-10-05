var React = require('react');

var MovieListComponent = React.createClass({

  getUnorderedListProps: function () {
    return{
        className: 'list-group'
    }
  },

  getListItemsProps: function () {
    return{
        className: 'list-group'
    }
  },
  
  render: function () {
    return (
      <ul {...this.getUnorderedListProps()} >
        <li {...this.getListItemsProps()} >testing</li>
      </ul>
    )
  }

});

module.exports = MovieListComponent;
