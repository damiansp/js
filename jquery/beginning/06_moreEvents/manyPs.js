$(function() {
    /* Don't do this:
    $('p').on('click', function() { console.log('clicked on p!'); });
    $('<p />', {text: 'Paragraph Number 6'}).appendTo('body');
    */
    // Do this:
    $('body').on('click', 'p', function() { console.log('clicked on p!'); });
    $('<p />', {text: 'Paragraph Number 6'}).appendTo('body');    
});
