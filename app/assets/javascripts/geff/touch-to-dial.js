$.fn.touchToDial = function() {
  if (this.length === 0) { return false; }

  if ('ontouchstart' in document.documentElement) {
    var number = $(this).text();
    $(this).wrapInner('<a href=""></a>');
    $(this).find('a').attr('href', 'tel:' + number);
  }
};
