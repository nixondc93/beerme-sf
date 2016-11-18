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
 
 //beer routes
app.get('/api/beer', controllers.beer.index);
app.get('api/beer/:id', controllers.beer.show);
// app.post();


//location routes
app.get('/api/location', controllers.location.index);
app.get('api/location/:id', controllers.location.show)
// app.post();

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
