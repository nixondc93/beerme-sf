
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Beer = require('./beer');
var Location = require('./location');




var RelationshipSchema = new Schema({

	_beer: {
		type: Schema.Types.ObjectId,
		ref: "Beer"
	},
	_location: {
		type: Schema.Types.ObjectId,
		ref: "Location"
	},

});

var Relationship = mongoose.model('Relationship', RelationshipSchema);

module.exports = Relationship;
