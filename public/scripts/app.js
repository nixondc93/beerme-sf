$(document).ready(function() {
    console.log('sanity check');
    $('.carousel').carousel();

    var brewerydb_api = "http://api.brewerydb.com/v2/?key=6150ca217ac01919daaaea494e109607"


    // submit event on form
    $('form').on('submit', function(event) {
        $.ajax({
            method: 'GET',
            url: endpoint,
            // The data to send aka query parameters
            data: $("form").serialize(),
            dataType: 'json',
            success: onSubmitReqSuccess
        });
    });

    function onSubmitReqSuccess(json) {
        console.log(json);
        // process data
    }


});
