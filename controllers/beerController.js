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
    // db.Beers.create()
}

function show(req, res) {
  db.Beer.findOne({ _id: req.params.id }, function (err, oneBeer){
    if(err){
      console.error(err);
    }
    console.log(oneBeer);
    res.json(oneBeer);
  });
}

function destroy(req, res) {

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
