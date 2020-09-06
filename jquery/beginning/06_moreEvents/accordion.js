$(function() {
    let headings = $('h2');
    let paragraphs = $('p');
    paragraphs.not(':first').hide();
    headings.on('click', function() {
        let t = $(this);
        let tPar = t.next();
        if (t.next().is(':visible')) return;
        paragraphs.slideUp('normal');
        tPar.slideDown('normal');
    });

});
