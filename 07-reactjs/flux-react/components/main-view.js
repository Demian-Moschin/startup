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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/MovieList">MovieList</Link></li>
              <li><Link to="/MovieNew">MovieNew</Link></li>
            </ul>
          </div>
        </div>
      )
  }
});
module.exports = MainView;