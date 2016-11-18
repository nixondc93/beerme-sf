$(document).ready(function(){
  console.log('sanity check');
   $('.carousel').carousel();
  //  console.log($.get())
  //  $.get('/api/beer').success(function(beers) {
  //   beers.forEach(function(beer) {
  //     renderBeer(beer);
  //   });
  //  });

  $.ajax({
			method: 'GET',
			url: '/api/beer',
			success: getBeersSucc,
			error: getBeersErr
		});
    $.ajax({
        method: 'GET',
        url: '/api/location',
        success: getlocationsSucc,
        error: getlocationsErr
      });



});///////////end of document.ready ////////////////////////

///////////get beers ajax functions/////////////////
function getBeersErr(err){
  console.error(error);
}

function getBeersSucc(json){
  json.forEach(function(beer) {
      render(beer, $('#beer-template'), $('#beers'));
  });
}


///////////get locations ajax functions///////////////

function getlocationsErr(err){
  console.error(error);
}

function getlocationsSucc(json){
  json.forEach(function(locations) {
      render(locations, $('#location-template'), $('.location-target'));
  });
}



///////////hb template rendering/////////////
 function render(json, html, target) {
   console.log('rendering', json);
   var hbTemplate = Handlebars.compile(html.html());
   var html = hbTemplate(json);
   target.prepend(html);
 }
