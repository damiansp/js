$(function() {
    $('h5').on('click', function() {
        $('div').trigger('bgchange');
    });

    $('div').on('bgchange', function() {
        let t = $(this);
        t.css('background-color', 'blue');
    });
});



