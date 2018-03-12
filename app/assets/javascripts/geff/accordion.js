$.fn.accordion = function() {
  if (this.length === 0) { return false; }

  var parentAccord = $(this)

  parentAccord.find('.accord-toggle').click(function(){
    $(this).next().slideToggle('fast');

    parentAccord.find(".accord-cont").not($(this).next()).slideUp('fast');
  });
};
