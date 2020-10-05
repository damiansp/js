$(function() {
    let accordion = $('#accordion');
    let headings = $('h2');
    let ps = $('p');
    
    let animateAccordion = function(el) {
      ps.stop(true, true).slideUp('normal'); 
      $(el).stop(true, true).slideDown('normal'); 
    };

    ps.not(':first').hide();
    accordion.on('click', 'h2', function() {
        let t = $(this);
        let tp = t.next();
        if (!tp.is(':visible')) tp.trigger('showParagraph');
    });

    accordion.on('showParagraph', 'p', function() {
        animateAccordion(this, 600, 'easeInCirc');
    });
});
