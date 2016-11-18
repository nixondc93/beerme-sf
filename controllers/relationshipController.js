var db = require('../models');




function index(req, res) {

}

function create(req, res) {


}

function show(req, res) {
  db.Relationship.find({_beer : req.prams._id}, function(err, beerLocations){
    beerLocations.populate('_location')
    .populate('_beer')
    .exec(function iFoundIt(err, foundRel) {
      console.log("Relationship Populated: ", foundRel);
      process.exit();
    });
  });
}

function destroy(req, res) {

}

function update(req, res) {

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
