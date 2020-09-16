$(function() {
    // stop prevents previous in-progress animations so queue cannot build
    $('h5').on('click', function() { $('div').stop(true, true).fadeToggle(500); });
});
