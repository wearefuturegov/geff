$.fn.sticky = function() {
  if (this.length === 0) { return false; }

  var stickyCont = $(this);
  var stickyInner = $(this).find('.sticky_inner');
  stickyCont.height(stickyInner.height());

  var stickyNavTop = stickyInner.offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      stickyInner.addClass('sticky');
    } else {
      stickyInner.removeClass('sticky');
    }
  };

  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
};
