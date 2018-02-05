var http = require('http'),
  fs = require('fs');
var s = http.createServer(handleIncomingRequest).listen(8080);

  
function handleIncomingRequest(req, res) {
  console.log('Incoming Request:' + req.method + ' ' + req.url);

  if (req.url == '/albums.json') {
    handleListAlbums(req, res);
  } else if (req.url.substr(0, 7) == '/albums' &&
             req.url.substr(req.url.length - 5) == '.json') {
    handleGetAlbum(req, res);
  } else { send_failure(res, 404, invalid_resource()); }
}

/**
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
*/


function loadAlbumList(callback) {
  // Assumes any directory in albums/ is an album
  fs.readdir('albums', (err, files) => {
      if (err) {
        callback(err);
        return;
      }

      var onlyDirs = [];
      var iterator = (index) => {
        if (index == files.length) {
          callback(null, onlyDirs);
          return;
        }

        fs.stat('albums/' + files[index], (err, stats) => {
            if (err) {
              callback(err);
              return;
            }
            if (stats.isDirectory()) { onlyDirs.push(files[index]); }

            iterator(index + 1)
        });
      };

      iterator(0);
  });
}



