$(function() {
    $('#accordion').accordion({
        headings: 'h2',
        content: 'p',
        duration: 1000,
        callback: function() { console.log('changed'); }});
});
