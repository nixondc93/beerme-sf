// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

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
  console.log("In Req.query: ", name);
  // console.log(req.prams);
  url = "http://api.brewerydb.com/v2/search?key=&q=" + name + "&type=beer";
  console.log(url);
  var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    //console.log(response)
    // so we have to handle the "data" event
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

        res.send({data: data});

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
