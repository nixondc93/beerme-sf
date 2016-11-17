var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Beer = require('./beer');
var Location = require('./location');

var RelationshipSchema = new Schema({

	_beer: {
		type: Schema.types.ObjectId,
		ref: "Beer"
	},
	_location: {
		type: Schema.types.ObjectId,
		ref: "Location"
	},

});

var Relationship = mongoose.model('Relationships', RelationshipSchema);

module.exports = Relationship;
