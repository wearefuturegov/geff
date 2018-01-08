$.fn.smoothScroll = function(scrollSpeed) {

  // TODO:
  // add improvement - set default speed to create the optimal speed based on length to the anchor - for example 500 may be the best speed when its only a short distance, but if its further 500 may be too quick.
  // a 'fast' 'slow' 'medium' setting may be better using this system.

  // create a class that removes this functinoality? Not sure if it would be required but might be nice if a link needs to not use this functionality.

  if (scrollSpeed != 0) {
    scrollSpeed = scrollSpeed || 1000;
  }

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, scrollSpeed, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
};
