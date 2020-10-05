(function($) {
  $.fn.logAttr = function(attr, backup='N/A', useAlert=false) {
    return this.each(function() {
        let val = $(this).attr(attr) || backup;
        useAlert ? alert(val) : console.log(val);
    });
  };
})(jQuery);
