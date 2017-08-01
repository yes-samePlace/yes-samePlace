
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/trymongo').connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database");  // we're connected!

  // create schemas
  var SubjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String
    }
  },
  {
    collection: 'subjects'
  });

  // create a model
  var Subject = mongoose.model('Subject', SubjectSchema);

  var arr = [{ name: 'Computer Programming', teacher: 'M. Swaminathan' }, { name: 'History' }];
  Subject.insertMany(arr, function(err) {
    if (err) throw err;

    console.log('Multiple subjects created!');

    // get all the subjects
    Subject.find({}, function(err, subjects) {
        if (err) throw err;

        console.log(subjects[0].name);
    });
  });
});