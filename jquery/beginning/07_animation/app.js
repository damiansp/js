// No control over order of animations here
$(function() {
    $('div')
      .animate({'height': 300})
      .fadeOut()
      .show(500)
      .animate({'width': 100})
      .css('background', 'red');
});
