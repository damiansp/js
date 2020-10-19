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

        $allButtons.on('click', function(e) {
            let isBackButton = $(this).hasClass('back');
            if (!isBackButton && isAtEnd()) {
              animateSliderToMargin(0, 1000);
            } else if (isBackButton && isAtBeginning) {
              animateSliderToMargin(endMargin, 1000);
            } else {
              animateSlider((isBackButton ? '+' : '-'), 1000);
            }
            e.preventDefault();
        });

        let getLeftMargin = function() {
          return parseInt($sliderList.css('margin-left'), 10);
        };
        
        let isAtBeginning = function() {
          return getLeftMargin() === 0;
        };

        let endMargin = -(($sliderItems.length - 1)
                          * $sliderItems.first().children('img').width());
        
        let isAtEnd = function() {
          return getLeftMargin() === endMargin;
        };

        let animateSlider = function(direction, duration, callback) {
          $sliderList.stop(true, true)
            .animate({'margin-left': direction + '=300px'}, duration, callback);
        };

        let animateSliderToMargin = function(margin, duration, callback) {
          $sliderList.stop(true, true)
            .animate({'margin-left': margin}, duration, callback); 
        };
    });
  };
})(jQuery);
