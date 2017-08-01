// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./Form");
var Gmap = require("./Gmap");

// Helper Function
var goapi = require("./goapi");

// This is the main component
var Main = React.createClass({

  // Here we set the initial state of our component
  getInitialState: function() {
    return { searchTerm: "", results: "" };
  },

  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Yes! Same Place</h2>
          </div>

          <div className="col-md-6">
            <Form setTerm={this.setTerm} />
          </div>

          <div className="col-md-6">
            <Gmap initialPosition={{lat: 48.858608, lng: 2.294471}} searchTerm={this.state.searchTerm}  />
          </div>
        
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
