var db = require('./models'),
	Beer = db.Beer,
	Location = db.Location,
	Relationship = db.Relationship;


var beers = [
	{
    name: "PBR",
		description: "Pabst Blue Ribbon Pliny The Elder lad;fj;adlsfj ;lakdfjsl;kadsfj;dlksfj ;adlsfjkkldsjfl ;asdfjldjasf kl;dsajfldsjf kdsafjlkjdfs ladfsj;dfjk dajskf; adjfk akjsdf ljdaf ;jad; fas ;;alkdfjs ;aldskfj;fjad ;sdsaf",
		rating: 10,
		Brewery: "PBR Brewing",
		abv: "4.5"
  },
	{
    name: "Schlitz",
		description: "Schlitz Pliny The Elder lad;fj;adlsfj ;lakdfjsl;kadsfj;dlksfj ;adlsfjkkldsjfl ;asdfjldjasf kl;dsajfldsjf kdsafjlkjdfs ladfsj;dfjk dajskf; adjfk akjsdf ljdaf ;jad; fas ;;alkdfjs ;aldskfj;fjad ;sdsaf",
		rating: 2,
		Brewery: "God Awful Brewing, Co.",
		abv: "6.5"
  },
	{
    name: "Pliny The Elder",
		description: "Pliny The Elder lad;fj;adlsfj ;lakdfjsl;kadsfj;dlksfj ;adlsfjkkldsjfl ;asdfjldjasf kl;dsajfldsjf kdsafjlkjdfs ladfsj;dfjk dajskf; adjfk akjsdf ljdaf ;jad; fas ;;alkdfjs ;aldskfj;fjad ;sdsaf",
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

Beer.remove({}, function goodByeBeerss(err, succ) {
	if (err) {
		return console.log("ERR: ", err);
	}
	console.log("All beers drank");

	Location.remove({}, function goodByeLocations(err, succ) {
		if (err) {
			return console.log("ERR: ", err);
		}
		console.log("All locations demolished");

		Beer.create(beers, function hoorayForBeer(err, succBeers) {
			if (err) {
				return console.log("ERR: ", err);
			}
			console.log(succBeers.length + " beers made");
			Location.create(locations, function letsAllDrink(err, succ) {
				if (err) {
					return console.log("ERR: ", err);
				}
				console.log(succ.length + " locations made");


				Location.findOne({
					Name: "Toronado"
				}, function foundABar(err, foundBar) {
					var newRelationship = {
						_location: foundBar._id,
						_beer: succBeers[0]._id
					}
					Relationship.create(newRelationship, function beerIsAtBar(err, connected) {
						if (err) {
							return console.log("ERR: ", err);
						}
						console.log("New Relationship created: ", connected);
					});


				});
			});



		});
	});
});
