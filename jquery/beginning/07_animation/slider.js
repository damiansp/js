$(function() {
    const IMAGE_WIDTH = 300;
    const sliderWrapper = $('#slider');
    const sliderList = sliderWrapper.children('ul');
    const sliderItems = sliderList.children('li');
    const buttons = sliderWrapper.children('.button');

    const isAtStart = function() {
      return parseInt(sliderList.css('margin-left'), 10) >= -IMAGE_WIDTH;
    };

    const isAtEnd = function() {
      const imageWidth = sliderItems.first().width();
      const imageCount = sliderItems.length;
      const maxMargin = -1 * (imageWidth * (imageCount - 2));
      return parseInt(sliderList.css('margin-left'), 10) <= maxMargin;
    };
    
    const animateSlider = function(direction, duration) {
      sliderList
        .stop(true, true)
        .animate({'margin-left': `${direction}=300px`}, duration);
    };

    buttons.on('click', function() {
        const $this = $(this);
        const isBackButton = $this.hasClass('back');
        if ((isBackButton && isAtStart()) || (!isBackButton && isAtEnd())) {
          return;
        }
        animateSlider(($(this).hasClass('back') ? '+' : '-'), 1000);
    });
});
