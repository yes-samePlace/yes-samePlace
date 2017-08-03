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
            <h1 className="text-center">Yes! Same Place</h1>
          </div>
          

          <div className="col-md-6" id = "con">
            <Form setTerm={this.setTerm} />
          </div>

          <div className="col-md-6">
            <Gmap initialPosition={{lat: 48.858608, lng: 2.294471}} searchTerm={this.state.searchTerm} id = "0" />
          </div>

           {/*Charlotte, NC, USA */}
           <div className="col-md-6" id = "secondMap">
            <Gmap initialPosition={{lat: 35.227085, lng: -80.843124}} searchTerm={this.state.searchTerm} id = "1"/>
          </div>
        
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
