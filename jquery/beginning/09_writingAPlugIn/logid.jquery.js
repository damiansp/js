const definePlugin = function() {
  const $ = jQuery; // prevent namespace clash
  $.fn.logID = function() {
    return this.each(function() { console.log(this.id); });
  };
};

definePlugin();
