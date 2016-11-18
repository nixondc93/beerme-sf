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
    url: '/search/',
    success: getBeerApiSucc,
    error: getBeerApiErr
  });


  // $('#adding_beer').on('submit', function(e){
  //   e.preventDefault();
  //   data = $('#beer_name').serialize();
  //   console.log(data);
  //   $.ajax({
  //     method: 'GET',
  //     data: data,
  //     url: '/search',
  //     success: getBeerApiSucc,
  //     error: getBeerApiErr
  //   });
  // })

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

      $('.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
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

////////////getBeerApiErr
function getBeerApiErr(err){
  if(err){
    console.error(err);
  }
}

////////////getBeerApiSucc
function getBeerApiSucc(json){
  console.log(json);

}



///////////hb template rendering/////////////
 function render(json, html, target) {
  //  console.log('rendering', json);
   var hbTemplate = Handlebars.compile(html.html());
   var htmlData = hbTemplate(json);
   target.prepend(htmlData);
 }
