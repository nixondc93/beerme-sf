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


});///////////end of document.ready ////////////////////////


function getBeersErr(err){
  console.error(error);
}

function getBeersSucc(json){
  json.forEach(function(beer) {
      renderBeer(beer);
  });
}



 function renderBeer(beer) {
   console.log('rendering beer', beer);
   var beerHtml = $('#beer-template').html();
   var beerTemplate = Handlebars.compile(beerHtml);
   var html = beerTemplate(beer);
   $('#beers').prepend(html);
 }
