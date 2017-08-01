var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/samePlaces',function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase();
});