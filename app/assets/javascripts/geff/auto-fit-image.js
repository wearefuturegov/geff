$.fn.autoFitImage = function() {
  if (this.length === 0) { return false; }

  /*
   * This function automatically sets the height of an image to fill its container if it is wider than it is taller - it also centres the image within the container.
   * If the image is taller than wider then it just centres it. It is assuming that the image is inside a container with overflow hidden.
   *
   *
   * Dev todo: Allow custom variables for left / top / center / bottom etc for aligning the image.
  */

  $('.auto_fit_image').each(function() {
    var width = $(this).width();
    var height = $(this).height();
    var alignment = $(this).data('align') || 'centre';

    if(width != height) {
      if (width > height) {
        $(this).height('100%').css('max-width', 'none');
        var overlap = $(this).width() - $(this).parent().width();
        if (alignment != 'left') {
          if(alignment == 'right') {
            $(this).css('margin-left', (overlap)*-1);
          } else {
            $(this).css('margin-left', (overlap/2)*-1);
          }
        }
      } else {
        var overlap = $(this).height() - $(this).parent().height();
        if (alignment != 'top') {
          if(alignment == 'bottom') {
            $(this).css('margin-top', (overlap)*-1);
          } else {
            $(this).css('margin-top', (overlap/2)*-1);
          }
        }
      }
    }
  });
};
