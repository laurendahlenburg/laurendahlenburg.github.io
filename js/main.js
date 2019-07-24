$(function() {
    // Start coding :)
    $('.card-deck').addClass('hide');

    var waypoints = $('.card-deck').waypoint(function(direction) {
        $('.card-deck').removeClass('hide').addClass('animated fadeIn');
    }, {
            offset: '50%'
        }
    );


    // Stop coding
});
