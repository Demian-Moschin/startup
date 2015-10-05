var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler ;
var Link = Router.Link;

var MainView = React.createClass({

  render: function () {
      return (
        <div>
          <h1>Main page</h1>
          <div className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li><Link to="home">Home</Link></li>
              <li><Link to="list">MovieList</Link></li>
              <li><Link to="new">MovieNew</Link></li>
            </ul>
          </div>
          <RouteHandler/>
        </div>
      )
  }
});

module.exports = MainView;
