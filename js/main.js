$(document).ready(function () {
    //Don't code above this line

    $('header').parallax(
        {
            imageSrc: 'img/typing.jpg'
    });

    $('.skills').parallax(
        {
            imageSrc: 'img/congruent_pentagon.png'
    });

    $('.contact').parallax(
        {
            imageSrc: 'img/desk.jpg'
    });

    // WAYPOINTS

    // var $hello = $('.bio h2');
    // $hello.addClass('hide');
    //
    // $hello.waypoint(function() {
    //     $hello.removeClass('hide').addClass('animated slideInUp')
    //     }, {
    //         offset: '65%'
    // });
    //
    // $('.bio ul li')
    //     .css('opacity', 0) // immediately hide element
    //     .waypoint(function(direction) {
    //         if (direction === 'down') {
    //           $(this.element).animate({ opacity: 1 })
    //         }
    //         else {
    //             $(this.element).animate({ opacity: 0.3 })
    //         }
    //         }, {
    //         offset: '65%'
    //     });


    // Don't code below this line
}); //END DOC.READY
