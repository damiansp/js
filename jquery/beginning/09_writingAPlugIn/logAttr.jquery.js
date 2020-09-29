(function($) {
  $.fn.logAttr = function(attr, backup) {
    return this.each(function() { console.log($(this).attr(attr) || backup); });
  };
})(jQuery);
