module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;

    var MainView = require('./views/main');
    var MovieList = require('./views/movie-list');
    var MovieNew = require('./views/movie-new');

    var ModuleRouter = function () {
        this.routes = (
          <Route handler={MainView} path="/" name="home">
            <Route name="list" handler={MovieList} path="/list"></Route>
            <Route name="new" handler={MovieNew} path="/new"></Route>
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
