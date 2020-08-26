$(function() {
    let rows = $('tr');
    rows.filter(':even').css('background', 'red');
    rows.filter(':odd').css({'background': 'blue', 'color': 'red'});
});
