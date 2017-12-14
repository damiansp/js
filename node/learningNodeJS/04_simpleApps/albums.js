var http = require('http'),
  fs = require('fs');
var s = http.createServer(handleIncomingRequest).listen(8080);

  
function handleIncomingRequest(req, res) {
  console.log('Incoming Request:' + req.method + ' ' + req.url);
  loadAlbumList((err, albums) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(err) + '\n');
        return;
      }

      var out = {error: null, data: {albums: albums}};
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(out) + '\n');
  });
}


function loadAlbumList(callback) {
  fs.readdir('albums', (err, files) => {
      if (err) {
        callback(err);
        return
      }

      callback(null, files);
  });
}


