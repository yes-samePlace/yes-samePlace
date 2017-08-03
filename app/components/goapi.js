// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(searchTerm,map,index) {

    console.log(searchTerm);

      return axios.get("/api/search/" + searchTerm).then(function(res) {
        console.log("res.map1 is " + JSON.stringify(res.data));
        var arr = [res.data.map1, res.data.map2];
        var location = arr[index]; //JSON.stringify()
        console.log("the new location from goapi: " + location);
      var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&sensor=false;'
              
    return axios.get(queryURL).then(function(response) {

      console.log(response);

      var userLat = response.data.results[0].geometry.location.lat;
            var userLng = response.data.results[0].geometry.location.lng; 
           // console.log(response.data.results[0]);
            var position = {lat: userLat, lng:userLng };
           var marker = new google.maps.Marker({
              position: position,
              map: map
            });//end of marker 
         return map.setCenter(marker.getPosition());
      
    });//end of then
  });// end of first axios
  }//end of runQuery

};// end of helper()

// We export the helpers object (which contains runQuery)
module.exports = helpers;
