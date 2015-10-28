var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var MasterNav = React.createClass({

  render: function () {
      return (

        <div>
            <header>
              <nav className="navbar navbar-inverse" role="navigation">
                  <div className="container-fluid">
                    <div className="navbar-brand">
                      <Link to="home">Home</Link>
                    </div>
                    <div className="navbar-right">
                      <ul className="nav navbar-nav">
                          <li><Link to="list">MovieList</Link></li>
                          <li><Link to="new">MovieNew</Link></li>
                          <li><Link to="tests">Tests</Link></li>
                      </ul>
                    </div>
                  </div>
              </nav>
            </header>
          <RouteHandler />
        </div>
      )
  }
});

module.exports = MasterNav;
