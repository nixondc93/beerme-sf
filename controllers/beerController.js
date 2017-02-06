var db = require('../models');




function index(req, res) {
  db.Beer.find(function (err, allBeers){
    if(err){
      console.error(err);
    }
    res.json(allBeers)
  });
}

function create(req, res) {
  db.Beer.create(rep.body, function(err, beerData){
    if(err){
      console.error(err);
    }
    res.json(beerData);
  });
}

function show(req, res) {
  db.Beer.findById(req.params._id, function (err, oneBeer){
    if(err){
      console.error(err);
    }
    console.log(oneBeer);
    res.json(oneBeer);
  });
}

function destroy(req, res) {
  db.Beer.findOneAndRemove({_id: id}, function(err, deletedBeer){
    if(err){
      console.error(err);
    }
      console.log('deleted');
      res.json(deletedBeer);
  });
}

function update(req, res) {


}


//export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
