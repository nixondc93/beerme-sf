$(document).ready(function(){
  console.log('sanity check');
   $('.carousel').carousel();

   $.get('/api/beer').success(function (beers) {
    beers.forEach(function(beer) {
      renderBeer(beer);
    });
  });




 });



 function renderBeer(beer) {
   console.log('rendering album', beer);
   var beerHtml = $('#beer-template').html();
   var beerTemplate = Handlebars.compile(beerHtml);
   var html = albumsTemplate(beer);
   $('#beers').prepend(html);
 }
