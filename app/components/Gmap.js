var React = require("react");
var ReactDOM = require("react-dom");
var goapi = require("./goapi");

const ARC_LOCATION = {
    lat: 48.873947,
    lng: 2.295038
};

class Gmap extends React.Component {

    componentDidMount() {
        const { lat, lng } = this.props.initialPosition;
        this.map = new google.maps.Map(this.refs["map"+this.props.id], {

            center: {
                lat,
                lng
            },
            zoom: 16
        });
    }

    componentDidUpdate(prevProps, prevState) {

        //If we have a new search term, run a new search
        if (prevProps.searchTerm !== this.props.searchTerm) {
            console.log("UPDATED");

            goapi.runQuery(this.props.searchTerm, this.map, this.props.id).then(function(data) {
                if (data !== this.props.results) {
                    this.setState({ results: data });
                }
                // This code is necessary to bind the keyword "this" when we say this.setState
                // to actually mean the component itself and not the runQuery function.
            }.bind(this));
        }
    }

    goToArc() {
        this.map.panTo(ARC_LOCATION);
    }

    render() {

        return ( <div ref = {"map" + this.props.id}
            style = { { width: 400, height: 400, border: '1px solid black' } } />    
        );
    }
}
Map.propTypes = {
    initialPosition: React.PropTypes.object.isRequired
};

module.exports = Gmap;