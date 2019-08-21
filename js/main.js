$(function() {
    // Start coding :)
    $('.card-deck').addClass('hide');

    var waypoints = $('.card-deck').waypoint(function(direction) {
        $('.card-deck').removeClass('hide').addClass('animated fadeIn');
    }, {
            offset: '50%'
        }
    );

    $(document).scroll(function () {
        var nav = $(".fixed-top");

        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });

    // Stop coding
});
