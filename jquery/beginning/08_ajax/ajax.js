$(function() {
    $.ajax({'url': 'sample.json', 'type': 'get', 'dataType': 'json'})
      .done(function(res) { console.log(res); })
      .fail(function() { console.log('fail', arguments); });
    
    // Alt:
    $.getJSON('./sample.json', function(data) { console.log(data); });
});
