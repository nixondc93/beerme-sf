var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/beerme");


module.exports.Beer = require('./beer');
module.exports.Location = require('./location');
// module.exports.Relationship = require('./relationships');
