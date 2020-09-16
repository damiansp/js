$(function() {
    let accordion = $('#accordion');
    let headings = $('h2');
    let pars = $('p');

    pars.not(':first').hide();
    accordion.on('click', 'h2', function() {
        let t = $(this);
        let tPar = t.next();
        if (!tPar.is(':visible')) tPar.trigger('showPar');
    });

    accordion.on('showPar', 'p', function() {
        pars.stop(true, true).slideUp('normal'); // stop prev animation first
        $(this).stop(true, true).slideDown('normal');
    });
});
