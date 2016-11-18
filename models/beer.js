var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var BeerSchema = new Schema({
  description: String,
  rating: Number,
  brewery: String,
  // location:   //referncing Relationship model to find locations
  abv: String
});

var Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
