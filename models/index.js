var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/beer-mesf");


module.exports.Beer = require('./beer');
module.exports.Location = require('./location');
module.exports.Relationship = require('./relationship');
