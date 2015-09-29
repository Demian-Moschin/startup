var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;



var MainView = React.createClass({

    render: function () {
        return (
            <div className = "row">
                <h1>This is the main title </h1>
                <ul>
                  <li><Link to="/MovieList">Movie list</Link></li>
                  <li><Link to="/MovieNew">MovieNew</Link></li>
                </ul>
            </div>
        )
    }

});

module.exports = MainView;
