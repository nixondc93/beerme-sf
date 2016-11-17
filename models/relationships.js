var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Beer = require('./beer');
var Location = require('./location');

var RelationshipSchema = new Schema({

  beer: Beer._id,
  location: Location._id

});

var Relationship = mongoose.model('Relationships', RelationshipSchema);

module.exports = Relationship;
