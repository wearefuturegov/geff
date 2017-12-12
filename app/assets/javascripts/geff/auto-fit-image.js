$.fn.autoFitImage = function() {
  if (this.length === 0) { return false; }

  /*
   * This function automatically sets the height of an image to fill its container if it is wider than it is taller - it also centres the image within the container.
   * If the image is taller than wider then it just centres it. It is assuming that the image is inside a container with overflow hidden.
  */

  $('.auto_fit_image').each(function() {
    var width = $(this).width();
    var height = $(this).height();

    if(width != height) {
      if (width > height) {
        $(this).height('100%').css('max-width', 'none');
        var overlap = $(this).width() - $(this).parent().width();
        $(this).css('margin-left', (overlap/2)*-1);
      } else {
        var overlap = $(this).height() - $(this).parent().height();
        $(this).css('margin-top', (overlap/2)*-1);
      }
    }
  });
};
