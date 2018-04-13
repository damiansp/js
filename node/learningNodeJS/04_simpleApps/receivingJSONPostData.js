var json_body = '';

req.on('readable', () => {
    var d = req.read();

    if (d) {
      if (typeof d == 'string') { json_body += d; }
      else if (typeof d == 'object' && d instanceof Buffer) {
        json_body += d.toString('utf8');
      }
    }
});

req.on('end', () => {
    // Did we get a valid body?
    if (json_body) {
      try {
        var body = JSON.parse(json_body);

        // use and callback
        callback(null, ...);
      } catch (e) {
        callback({error: 'invalid_json',
                  message: 'The body is not valid JSON' });
      }
    } else {
      callback({error: 'no_body',
                message: 'No JSON received'});
    }
});
