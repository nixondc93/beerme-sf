var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  latitude: Number,
  longitude: Number,
  Name: String,
  TypeOf: String,
  Address: String,
  phone: String
  // open: Boolean
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
