$(function() {
    $('a').on('click', function(e) {
        e.preventDefault(); // e.g., don't actually follow the link
        $('div').css('background', 'blue');
    });
});
