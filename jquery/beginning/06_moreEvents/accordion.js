$(function() {
    let accordion = $('#accordion');
    let headings = $('h2');
    let paragraphs = $('p');
    paragraphs.not(':first').hide();
    accordion.on('click', 'h2', function() {
        let t = $(this);
        let tPar = t.next();
        if (!tPar.is(':visible')) tPar.trigger('showParagraph');
    });

    accordion.on('showParagraph', 'p', function() {
        paragraphs.slideUp('normal');
        $(this).slideDown('normal');
    });
});
