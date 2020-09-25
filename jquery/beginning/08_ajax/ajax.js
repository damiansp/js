$(function() {
    /*
    $.ajax({'url': 'sample.json', 'type': 'get', 'dataType': 'json'})
      .done(function(res) { console.log(res); })
      .fail(function() { console.log('fail', arguments); });
    */
    
    // Alt:
    $.getJSON('./sample.json', function(data) { console.log(data); });

    // In lieu of callbacks:
    const res = $.getJSON('./sample.json');
    res.done(function() {
        console.log('Got response: ');
        console.log(res);
        const data = res['responseJSON'];
        console.log('Data: ');
        console.log(data);
    });


    // Get data from TVMaze API
    const tvmReq = $.ajax({url: 'http://api.tvmaze.com/show/396/episodes'});
    tvmReq.done(function(data) { console.log(data); });
});
