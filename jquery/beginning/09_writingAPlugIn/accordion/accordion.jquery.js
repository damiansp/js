(function($) {
    $.fn.accordion = function(opts) {
      let defaults = {headings: 'h2', content: 'p', callback: function() {}};
      let options = $.extend({}, defaults, opts);
      
      return this.each(function() {
          let $this = $(this);
          let headings = $this.children(options.headings);
          let paragraphs = $this.children(options.content);

          let animateAccordion = function(elem, duration, callback) {
            paragraphs.stop(true, true).slideUp(duration);
            $(elem).stop(true, true).slideDown(duration, callback);
          };

          paragraphs.not(':first').hide();
          $this.on('click', options.headings, function() {
              let t = $(this);
              let tPar = t.next();
              if (!tPar.is(':visible')) tPar.trigger('showParagraph');
          });

          $this.on('showParagraph', options.content, function() {
              animateAccordion(this, 600);
          });
      });
    };
})(jQuery);
