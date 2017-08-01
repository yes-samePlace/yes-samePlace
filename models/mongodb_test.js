
// Include Server Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');


// Require History Schema
var Places = require("./Places");

// Create Instance of Express
var app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

console.log(" I am now here 1");

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;


console.log(" I am now here 2");
// -------------------------------------------------
mongoose.connect("mongodb://localhost/samePlaces");

var db = mongoose.connection;
//-----------------------
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
//-----------------------------------

console.log(" I am now here 3");
// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {
console.log(" I am now here 4");
console.log(req.query.search);
var re = new RegExp(req.query.search,"i");

  // We will find all the records, sort it in descending order, then limit the records to 5
  Places.find({"user_search": re},{map1:"",map2:"",wiki1:"",wiki2:"",_id:0},function(err, doc) { //.exec
    if (err) {
      console.log("Try something else");
    }
    else {
    	//for(var i = 0; i < doc.length; i++) {
     		res.send(doc);
     		
     	//}
    }
  });
});

// -----------------------------------------------------
   // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;
// -----------------------------------------------------

app.get("/search", function(req, res) {
  res.sendFile('search.html');
});



// -------------------------------------------------
console.log(" I am now here 5");
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});