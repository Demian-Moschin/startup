module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var MainView = require('./views/main-view');
    var MovieList = require('./views/movie-list-view');
    var MovieNew = require('./views/movie-new-view');

    var ModuleRouter = function () {
        this.routes = (
            <Route path="/" component={MainView} >
                <Route path="MovieList" component={MovieList} />
                <Route path="MovieNew" component={MovieNew} />
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
