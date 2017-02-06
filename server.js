// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));



var controllers = require('./controllers');
var http = require("http");

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoint
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/search', function getbeers (req, res) {
  var name = req.query.q;


  url = "http://api.brewerydb.com/v2/search?key=" + name + "&type=beer";

  var request = http.get(url, function (response) {

    var buffer = "",
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {

        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);

        res.send(data);

        console.log("this is data1", data);

        // FIRST, test that you have all CRUD working

        // iterate over everything with the iterator pulling out your desired parameters, if those given properties exist, push into beer.arr, then RENDER the ENTIRE new array

        // beerarr = [];
        // data.forEach(function(ele, arr){
        //   var beerObj = {
        //     name: ele.shortName,
        //     description: ele.description,
        //     abv: ele.abv
        //   }
        //   beerarr.push(beerObj);
        //
        // });

        ////////
        // res.send({data: beerarr});
        // db.Beer.create(beerarr, function(err, beerData){
        //   if(err){
        //     console.error(err);
        //   }
        //
        //   console.log("This is beerData", beerData);
        //   res.json(beerData);
        // });
    });


});

});


 //beer routes
app.get('/api/beer', controllers.beer.index);
app.get('/api/beer/:_id', controllers.beer.show);
app.post('api/beer', controllers.beer.create);
app.delete('api/beer/:_id', controllers.beer.destroy);


//location routes
app.get('/api/location', controllers.location.index);
app.get('/api/location/:_id', controllers.location.show)
app.post('api/location', controllers.location.create);
app.delete('api/location/:_id', controllers.location.destroy);

//relationship routes

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
