$.fn.alerts = function() {
  if (this.length === 0) { return false; }

  setTimeout(function() {
    $('#alerts').slideUp();
  }, 5000);

  $('#alert_close').click(function() {
    $('#alerts').slideUp();
  });
};
