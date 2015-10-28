module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var MasterNav = require('./views/master-nav');
    var MovieList = require('./views/movie-list');
    var MovieNew = require('./views/movie-new');
    var Home = require('./views/home');
    var Tests = require('./views/tests');

    var ModuleRouter = function () {
        this.routes = (
          <Route handler={MasterNav} path="/" name="app">
            <DefaultRoute  handler={Home} />
            <Route name="home" handler={Home} path="/home"></Route>
            <Route name="list" handler={MovieList} path="/list"></Route>
            <Route name="new" handler={MovieNew} path="/new"></Route>
            <Route name="tests" handler={Tests} path="/tests"></Route>
          </Route>

        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        Router.run(this.routes, function (Root) {
            React.render(<Root />, mountElement);
        });
    };
    return new ModuleRouter();
})();
