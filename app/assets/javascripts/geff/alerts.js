$.fn.alerts = function(timeOut) {
  if (this.length === 0) { return false; }

  timeOut = timeOut || 5000;

  if (timeOut != 0) {
    setTimeout(function() {
      $('#alerts').slideUp();
    }, timeOut);
  }

  $('#alert_close').click(function() {
    $('#alerts').slideUp();
  });
};
