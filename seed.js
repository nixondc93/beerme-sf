var db = require('./models'),
	Beer = db.Beer,
	Location = db.Location,
	Relationship = db.Relationship;


var beers = [
  {
      "id": "cBLTUw",
      "name": "\"18\" Imperial IPA 2",
      "nameDisplay": "\"18\" Imperial IPA 2",
      "description": "Hop Heads this one's for you!  Checking in with 143 IBU's this ale punches you in the mouth with extreme bitterness then rounds out with toffee flavors and finishes with a citrus aroma.  Made with tons of US 2 Row Barley to get this to ABV 11.1%.",
      "abv": "11.1",
      "glasswareId": 5,
      "srmId": 33,
      "styleId": 43,
      "isOrganic": "N",
      "status": "verified",
      "statusDisplay": "Verified",
      "createDate": "2013-01-20 21:38:15",
      "updateDate": "2016-08-17 16:05:54",
      "glass": {
        "id": 5,
        "name": "Pint",
        "createDate": "2012-01-03 02:41:33"
      },
      "srm": {
        "id": 33,
        "name": "33",
        "hex": "520907"
      },
      "style": {
        "id": 43,
        "categoryId": 3,
        "category": {
          "id": 3,
          "name": "North American Origin Ales",
          "createDate": "2012-03-21 20:06:45"
        },
        "name": "American-Style Imperial Stout",
        "shortName": "American Imperial Stout",
        "description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
        "ibuMin": "50",
        "ibuMax": "80",
        "abvMin": "7",
        "abvMax": "12",
        "srmMin": "40",
        "srmMax": "40",
        "ogMin": "1.08",
        "fgMin": "1.02",
        "fgMax": "1.03",
        "createDate": "2012-03-21 20:06:46",
        "updateDate": "2015-04-07 15:28:49"
      },
      "breweries": [
        {
          "id": "qa1QZU",
          "name": "Ship Bottom Brewery",
          "nameShortDisplay": "Ship Bottom",
          "description": "Our humble beginnings started in the Summer of 1995 in Ship Bottom, NJ. Back then we made our first batch of beer using a home brew kit that consisted of a plastic bucket, large spoon, bottling bucket and some bottle caps. We hardly knew what what would be ahead of us 16 years later! We learned a lot over the last 16 years and feel that we really refined our craft. We are a small (Nano) brewer...See More",
          "website": "http://www.shipbottombrewery.com/",
          "established": "2011",
          "isOrganic": "N",
          "images": {
            "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/qa1QZU/upload_ZwdBjC-icon.png",
            "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/qa1QZU/upload_ZwdBjC-medium.png",
            "large": "https://s3.amazonaws.com/brewerydbapi/brewery/qa1QZU/upload_ZwdBjC-large.png",
            "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/qa1QZU/upload_ZwdBjC-squareMedium.png",
            "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/qa1QZU/upload_ZwdBjC-squareLarge.png"
          },
          "status": "verified",
          "statusDisplay": "Verified",
          "createDate": "2013-01-20 21:32:30",
          "updateDate": "2016-08-31 14:57:52",
          "locations": [
            {
              "id": "mvsNhg",
              "name": "Main Brewery",
              "locality": "Wallingford",
              "region": "Pennsylvania",
              "postalCode": "19086",
              "website": "http://www.shipbottombrewery.com/",
              "latitude": 39.8909454,
              "longitude": -75.3629687,
              "isPrimary": "Y",
              "inPlanning": "N",
              "isClosed": "N",
              "openToPublic": "Y",
              "locationType": "micro",
              "locationTypeDisplay": "Micro Brewery",
              "countryIsoCode": "US",
              "yearOpened": "2011",
              "status": "verified",
              "statusDisplay": "Verified",
              "createDate": "2013-01-20 21:33:44",
              "updateDate": "2014-07-23 19:11:34",
              "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "ZsQEJt",
      "name": "\"633\" American Pale Ale",
      "nameDisplay": "\"633\" American Pale Ale",
      "description": "Our first beer has been aptly named \"633\" after the Regions telephone exchange for starters.  \"If I could call a beer home, this would be the one.\" ~ Win\r\n\r\nIt is a mildly hoppy pale ale using a 2 row, vienna, and munich malts for body,color, and head retention. It is hopped with American west coast hops later in the boil giving it a nice citrus hop flavor and very mild aroma. Slight addition of a roasted caramel malt gives \"633\" it's signature 'sunset over the harbor glow'.",
      "abv": "6.33",
      "ibu": "25",
      "availableId": 1,
      "styleId": 25,
      "isOrganic": "N",
      "status": "verified",
      "statusDisplay": "Verified",
      "createDate": "2015-04-20 21:43:59",
      "updateDate": "2015-04-20 21:43:59",
      "available": {
        "id": 1,
        "name": "Year Round",
        "description": "Available year round as a staple beer."
      },
      "style": {
        "id": 25,
        "categoryId": 3,
        "category": {
          "id": 3,
          "name": "North American Origin Ales",
          "createDate": "2012-03-21 20:06:45"
        },
        "name": "American-Style Pale Ale",
        "shortName": "American Pale",
        "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
        "ibuMin": "30",
        "ibuMax": "42",
        "abvMin": "4.5",
        "abvMax": "5.6",
        "srmMin": "6",
        "srmMax": "14",
        "ogMin": "1.044",
        "fgMin": "1.008",
        "fgMax": "1.014",
        "createDate": "2012-03-21 20:06:45",
        "updateDate": "2015-04-07 15:25:18"
      },
      "breweries": [
        {
          "id": "DBkLHq",
          "name": "Boothbay Craft Brewery, Inc",
          "nameShortDisplay": "Boothbay Craft",
          "description": "The 1st brewery in the Boothbay Region. Our idea is to let the locals become a part by donating trees so we can saw them into beams for the brewery! Got wood?",
          "website": "http://www.boothbaycraftbrewery.com",
          "isOrganic": "N",
          "status": "verified",
          "statusDisplay": "Verified",
          "createDate": "2012-01-03 02:41:47",
          "updateDate": "2015-12-22 15:18:00",
          "locations": [
            {
              "id": "GhJ5ei",
              "name": "Main Brewery",
              "streetAddress": "301 Adams Pond Rd",
              "locality": "Boothbay",
              "region": "Maine",
              "postalCode": "04537",
              "phone": "217-633-3411",
              "website": "http://www.boothbaycraftbrewery.com",
              "latitude": 43.8807856,
              "longitude": -69.6331261,
              "isPrimary": "Y",
              "inPlanning": "N",
              "isClosed": "N",
              "openToPublic": "Y",
              "locationType": "micro",
              "locationTypeDisplay": "Micro Brewery",
              "countryIsoCode": "US",
              "status": "verified",
              "statusDisplay": "Verified",
              "createDate": "2012-01-03 02:41:47",
              "updateDate": "2014-07-23 19:11:34",
              "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "tmEthz",
      "name": "\"Admiral\" Stache",
      "nameDisplay": "\"Admiral\" Stache",
      "description": "Milwaukee Brewing Co’s take on a classic European style. Baltic Porters are the stronger lager fermented cousin of the classic London Porter. The higher strength and cold fermentation help to create a smooth, less fruity porter, rich in roasted malt flavors and aromas. The “Admiral” Stache has a deep brown hue with a light caramel head. Toffee and milk chocolate dominate the flavor with subtle hints of dried fruit. One month of aging in Bourbon Barrels imparted a layer of vanilla and oak.\r\n\r\nWe first developed this beer in 2007. Our first attempted batch of beer at the 2nd street location was a Baltic Porter. What we ended up with became known as “Shake Down Nut Brown”. You can guess what went wrong from there… But, so many things right! Every year that has gone by, the beer has gotten a little bit stronger, in flavor and alcohol.\r\n\r\nWe use a black malt for the dark rich color and an extra special malt for the dried fruit flavors. Baltic Porters are fermented cold with a lager yeast. That long slow maturation creates a smooth flavor profile. The anticipation of the bourbon barrel aging it the most exciting part of this brew process. We want that oak character with hints of bourbon, we use 3rd run barrels for this result. Each batch has been slightly different from the last.",
      "abv": "7",
      "ibu": "23",
      "glasswareId": 5,
      "srmId": 37,
      "availableId": 4,
      "styleId": 104,
      "isOrganic": "N",
      "labels": {
        "icon": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-icon.png",
        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-medium.png",
        "large": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-large.png"
      },
      "status": "verified",
      "statusDisplay": "Verified",
      "originalGravity": "1.071",
      "createDate": "2012-09-09 13:35:27",
      "updateDate": "2016-11-11 14:23:06",
      "glass": {
        "id": 5,
        "name": "Pint",
        "createDate": "2012-01-03 02:41:33"
      },
      "srm": {
        "id": 37,
        "name": "37",
        "hex": "3F0708"
      },
      "available": {
        "id": 4,
        "name": "Seasonal",
        "description": "Available at the same time of year, every year."
      },
      "style": {
        "id": 104,
        "categoryId": 9,
        "category": {
          "id": 9,
          "name": "Other Lager",
          "createDate": "2012-03-21 20:06:46"
        },
        "name": "Baltic-Style Porter",
        "shortName": "Baltic Porter",
        "description": "A true smooth cold-fermented and cold lagered beer, brewed with lager yeast. Black to very deep ruby/garnet in color. Overall, Baltic Porters have a very smooth lagered character with distinctive caramelized sugars, licorice and chocolate-like character of roasted malts and dark sugars. Roasted dark malts should not contribute bitterness, or astringent roast character. A low degree of smokiness from malt may be evident. Debitterized roast malts are best used for this style. Because of its alcoholic strength, aroma may include gentle (low) lager fruitiness (berries, grapes, plums, not banana; ale-like fruitiness from warm temperature fermentation is not appropriate), complex alcohols, cocoa-like, roast malt (and sometimes coffee-like roast barley, yet not bitter). Hop aroma is very low, though a hint of floral or sweet hop aroma can complement aromatics and flavor without dominance. Baltic Porters are not hop bitter dominated and expressed as low to medium-low. Baltic porters range from having medium to full body complemented with a medium-low to medium level of malty sweetness. No butterscotch-like diacetyl or sweet corn-like dimethylsulfide (DMS) should be apparent in aroma or flavor.",
        "ibuMin": "35",
        "ibuMax": "40",
        "abvMin": "7.5",
        "abvMax": "9",
        "srmMin": "40",
        "srmMax": "40",
        "ogMin": "1.072",
        "fgMin": "1.016",
        "fgMax": "1.022",
        "createDate": "2012-03-21 20:06:46",
        "updateDate": "2015-04-07 15:41:46"
      },
      "breweries": [
        {
          "id": "BU4IJP",
          "name": "Milwaukee Brewing Company",
          "nameShortDisplay": "Milwaukee",
          "description": "The Milwaukee Brewing Company is the 'grown up' brewery name for the familiar Milwaukee Ale House in Milwaukee's Historic 3rd Ward.\r\n\r\nThe Ale House has always been brewing under the name Milwaukee Brewing Company. While we continue to brew at the Ale House, we have the 2nd Street Brewery located in Walkers Point.",
          "website": "http://mkebrewing.com/",
          "established": "1997",
          "mailingListUrl": "http://mkebrewing.com/email-signup/",
          "isOrganic": "N",
          "images": {
            "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/BU4IJP/upload_KhW53P-icon.png",
            "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/BU4IJP/upload_KhW53P-medium.png",
            "large": "https://s3.amazonaws.com/brewerydbapi/brewery/BU4IJP/upload_KhW53P-large.png",
            "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/BU4IJP/upload_KhW53P-squareMedium.png",
            "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/BU4IJP/upload_KhW53P-squareLarge.png"
          },
          "status": "verified",
          "statusDisplay": "Verified",
          "createDate": "2012-01-03 02:42:02",
          "updateDate": "2015-12-22 15:21:38",
          "locations": [
            {
              "id": "NJbyiS",
              "name": "Main Brewery",
              "streetAddress": "613 South 2nd Street",
              "locality": "Milwaukee",
              "region": "Wisconsin",
              "postalCode": "53204",
              "phone": "414-226-2337",
              "website": "http://Mkebrewing.com",
              "latitude": 43.024914,
              "longitude": -87.9130348,
              "isPrimary": "Y",
              "inPlanning": "N",
              "isClosed": "N",
              "openToPublic": "Y",
              "locationType": "micro",
              "locationTypeDisplay": "Micro Brewery",
              "countryIsoCode": "US",
              "yearOpened": "2007",
              "status": "verified",
              "statusDisplay": "Verified",
              "createDate": "2012-01-03 02:42:02",
              "updateDate": "2016-09-20 15:44:12",
              "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
              }
            },
            {
              "id": "2SQXoB",
              "name": "Milwaukee Ale House",
              "streetAddress": "233 North Water St.",
              "locality": "Milwaukee",
              "region": "Wisconsin",
              "postalCode": "53202",
              "phone": "414.276.BEER",
              "website": "http://ale-house.com/",
              "hoursOfOperation": "Mon - Thu: 11:00 am - 12:00 am\r\nFri - Sat:  11:00 am - 2:00 am\r\nSun:  11:00 am - 12:00 am",
              "latitude": 43.032936,
              "longitude": -87.909214,
              "isPrimary": "N",
              "inPlanning": "N",
              "isClosed": "N",
              "openToPublic": "Y",
              "locationType": "restaurant",
              "locationTypeDisplay": "Restaurant/Ale House",
              "countryIsoCode": "US",
              "yearOpened": "2009",
              "status": "verified",
              "statusDisplay": "Verified",
              "createDate": "2012-09-09 13:07:15",
              "updateDate": "2014-07-23 19:11:34",
              "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
              }
            },
            {
              "id": "em9Lxc",
              "name": "Milwaukee Ale House Grafton",
              "streetAddress": "1208 13th Ave.",
              "locality": "Grafton",
              "region": "Wisconsin",
              "postalCode": "53024",
              "phone": "1 (262) 375-2337",
              "website": "http://www.alehousegrafton.com/",
              "hoursOfOperation": "Mon - Wed:  11:00 am - 12:00 am\r\nThu - Sat:  11:00 am - 2:00 am\r\nSun:  11:00 am - 12:00 am",
              "latitude": 43.319725,
              "longitude": -87.950469,
              "isPrimary": "N",
              "inPlanning": "N",
              "isClosed": "N",
              "openToPublic": "Y",
              "locationType": "restaurant",
              "locationTypeDisplay": "Restaurant/Ale House",
              "countryIsoCode": "US",
              "yearOpened": "2010",
              "status": "verified",
              "statusDisplay": "Verified",
              "createDate": "2012-09-09 13:09:10",
              "updateDate": "2014-07-23 19:11:34",
              "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "b7SfHG",
      "name": "\"Ah Me Joy\" Porter",
      "nameDisplay": "\"Ah Me Joy\" Porter",
      "description": "A robust porter style ale with a twist. This beer has moderate roastiness with a bitter finish, complemented by the sweetness of almond and coconut, which may remind you of a certain candy. Sit back with a pint and you'll say \"ah, me joy!\"",
      "abv": "5.4",
      "ibu": "51",
      "srmId": 40,
      "styleId": 19,
      "isOrganic": "N",
      "status": "verified",
      "statusDisplay": "Verified",
      "createDate": "2015-11-02 20:42:02",
      "updateDate": "2015-11-02 20:42:03",
      "srm": {
        "id": 40,
        "name": "40",
        "hex": "36080A"
      },
      "style": {
        "id": 19,
        "categoryId": 1,
        "category": {
          "id": 1,
          "name": "British Origin Ales",
          "createDate": "2012-03-21 20:06:45"
        },
        "name": "Robust Porter",
        "shortName": "Robust Porter",
        "description": "Robust porters are black in color and have a roast malt flavor, often reminiscent of cocoa, but no roast barley flavor. These porters have a sharp bitterness of black malt without a highly burnt/charcoal flavor. Caramel and other malt sweetness should be present and in harmony with other distinguishing porter characters. Robust porters range from medium to full in body and have a malty sweetness. Hop bitterness is medium to high, with hop aroma and flavor ranging from negligible to medium. Diacetyl is acceptable at very low levels. Fruity esters should be evident, balanced with roast malt and hop bitterness.",
        "ibuMin": "25",
        "ibuMax": "40",
        "abvMin": "5",
        "abvMax": "6.5",
        "srmMin": "30",
        "srmMax": "30",
        "ogMin": "1.045",
        "fgMin": "1.008",
        "fgMax": "1.016",
        "createDate": "2012-03-21 20:06:45",
        "updateDate": "2015-04-07 15:21:45"
      },
      "breweries": [
        {
          "id": "pvE2w5",
          "name": "GAEL Brewing Company",
          "nameShortDisplay": "GAEL",
          "website": "http://www.gaelbrewing.com/",
          "isOrganic": "N",
          "images": {
            "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/pvE2w5/upload_Z1kmoQ-icon.png",
            "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/pvE2w5/upload_Z1kmoQ-medium.png",
            "large": "https://s3.amazonaws.com/brewerydbapi/brewery/pvE2w5/upload_Z1kmoQ-large.png",
            "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/pvE2w5/upload_Z1kmoQ-squareMedium.png",
            "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/pvE2w5/upload_Z1kmoQ-squareLarge.png"
          },
          "status": "verified",
          "statusDisplay": "Verified",
          "createDate": "2015-08-02 13:52:35",
          "updateDate": "2015-12-22 16:14:22",
          "locations": [
            {
              "id": "c6Lvo1",
              "name": "Main Brewery",
              "streetAddress": "4180 State Route 14",
              "locality": "Geneva",
              "region": "New York",
              "postalCode": "14456",
              "phone": "315-220-0190",
              "website": "http://www.gaelbrewing.com",
              "latitude": 42.8330986,
              "longitude": -76.9796344,
              "isPrimary": "N",
              "inPlanning": "N",
              "isClosed": "N",
              "openToPublic": "Y",
              "locationType": "micro",
              "locationTypeDisplay": "Micro Brewery",
              "countryIsoCode": "US",
              "status": "verified",
              "statusDisplay": "Verified",
              "createDate": "2015-08-02 13:52:37",
              "updateDate": "2015-08-03 15:27:48",
              "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
              }
            }
          ]
        }


]
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
},
{
  latitude: 142,
  longitude: 37.6,
  Name: "BarNone",
  TypeOf: "Bar",
  Address: "Haight Street",
  phone: "555-555-5555"
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
