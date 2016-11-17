var db = require('./models'),
	Beer = db.Beer,
	Location = db.Location;


var beers = [
	{
		description: "PBR",
		rating: 10,
		Brewery: "PBR Brewing",
		abv: "4.5"
  },
	{
		description: "Schlitz",
		rating: 2,
		Brewery: "God Awful Brewing, Co.",
		abv: "6.5"
  },
	{
		description: "Pliny The Elder",
		rating: 99,
		Brewery: "Russian River Brewing Company",
		abv: "8.0"
  }
]

var locations = [
	{
		latitude: 142,
		longitude: 37.6,
		Name: "Toronado",
		TypeOf: "Bar",
		Address: "Haight Street",
		phone: "415-555-0942"
}
]


Beer.create(beers, function hoorayForBeer(err, succ) {
	if (err) {
		return console.log("ERR: ", err);
	}
	console.log(succ.length + " beers made");
});

Location.create(locations, function letsAllDrink(err, succ) {
	if (err) {
		return console.log("ERR: ", err);
	}
	console.log(succ.length + " locations made");

});
