module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;

    var MainView = require('./components/main-view');
    var MovieList = require('./components/movie-list-view');
    var MovieNew = require('./components/movie-new-view');

    var ModuleRouter = function () {
        this.routes = (
          <Route handler={MainView} path="/" name="home">
            <Route name="list" handler={MovieList} path="/MovieList"></Route>
            <Route name="new" handler={MovieNew} path="/MovieNew"></Route>
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

