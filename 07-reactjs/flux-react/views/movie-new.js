var  MovieFormComponent = require('../components/movie-form.js');
var React = require('react');

var NewMovie = React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-xs-12">
                      <h2>New Movies</h2>
                      <MovieFormComponent />
                  </div>
              </div>
          </div>
        </section>

        
       
      </div>  
    );
  }
  
});

module.exports = NewMovie;
