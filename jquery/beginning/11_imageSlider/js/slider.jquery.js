(function($) {
  $.fn.slider = function(options) {
    let defaults = {};
    let settings = $.extend({}, defaults, options);
    return this.each(function() {
        let $slider = $(this);
        let $sliderList = $slider.children('ul');
        let $sliderItems = $sliderList.children('li');
        let $allButtons = $slider.find('.button');
        let $buttons = {forward: $allButtons.filter('.forward'),
                        back: $allButtons.filter('.back')};

        let animateSlider = function(direction, duration, callback) {
          $sliderList.stop(true, true)
            .animate({'margin-left': direction + '=300px'}, duration, callback);
        };
    });
  };
})(jQuery);
