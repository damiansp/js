// Find ps with strong tags, and give them a red background
$(function() {
    $('p').filter(function() {
        return $(this).children('strong').length > 0;
    }).css('background', 'red');
});
