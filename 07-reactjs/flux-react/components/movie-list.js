var React = require('react');

var MovieListComponent = React.createClass({

  render: function () {

    return (
    <div className="table-responsive">
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <button type="button" className="btn btn-default btn-sm" >
               <span className="glyphicon glyphicon-remove-circle"></span> 
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    )
  }

});

module.exports = MovieListComponent;
