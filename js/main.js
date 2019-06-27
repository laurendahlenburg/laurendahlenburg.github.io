$(document).ready(function () {
    //Don't code above this line

    $('header').parallax(
        {
            imageSrc: 'img/typing.jpg'
    });

    // WAYPOINTS
        $('.bio ul li')
              .css('opacity', 0) // immediately hide element
              .waypoint(function(direction) {
                if (direction === 'down') {
                  $(this.element).animate({ opacity: 1 })
                }
                else {
                  $(this.element).animate({ opacity: 0.3 })
                }
              }, {
                offset: '65%'
              })

    // Don't code below this line
}); //END DOC.READY
