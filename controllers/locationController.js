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


}

function show(req, res) {
  db.findOne({_id: req.params.id}, function(err, oneLocation){
    if(err){
      console.error(err);
    }
    console.log(oneLocation)
    res.json(oneLocation);
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
