var db = require('../models');




function index(req, res) {
  db.Location.find(function (err, allLocations){
    if(err){
      console.error(err);
    }
    res.json(allLocations);
  });
}

function create(req, res) {
  db.Location.create(rep.body, function(err, locationData){
    if(err){
      console.error(err);
    }
    res.json(locationData);
  });


}

function show(req, res) {
  db.Location.findById(req.params._id, function(err, oneLocation){
    if(err){
      console.error(err);
    }
    console.log(oneLocation)
    res.json(oneLocation);
  });
}

function destroy(req, res) {
  db.Location.findOneAndRemove({_id: id}, function(err, deletedLocation){
    if(err){
      console.error(err);
    }
      console.log('deleted');
      res.json(deletedLocation);
  });

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
