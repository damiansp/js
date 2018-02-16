var http = require('http'),
  fs = require('fs');
var s = http.createServer(handleIncomingRequest);

s.listen(8080);

function loadAlbumList(callback) {
  // Assumes any dir in 'albums/' is an album
  fs.readdir('albums', (err, files) => {
      if (err) {
        callback(make_error('file_error', JSON.stringify(err)));
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
              callback(makeError('fileError', JSON.stringify(err)));
              return;
            }

            if (stats.isDirectory()) {
              var obj = {name: files[index]};
              onlyDirs.push(obj)
            }

            iterator(index + 1);
        });
      }

      iterator(0);
  });
}


function loadAlbum(albumName, callback) {
  fs.readdir('albums/' + albumName, (err, files) => {
      if (err) {
        if(err.code == 'ENOENT') { callback(noSuchAlbum()); }
        else { callback(makeError('fileError', JSON.stringify(err))); }
        return;
      }

      var onlyFiles = [];
      var path = `albums/${albumName}/`;

      var iterator = (index) => {
        if (index == files.length) {
          var obj = {shortName: albumName, photos: onlyFiles};

          callback(null, obj);
          return;
        }

        fs.stat(path + files[index], (err, stats) => {
            if (err) {
              callback(makeError('fileError', JSON.stringify(err)));
              return;
            }

            if (stats.isFile()) {
              var obj = {filename: files[index], desc: files[index]};

              onlyFiles.push(obj);
            }

            iterator(index + 1);
        });
      }

      iterator(0);
  });
}


function handleIncomingRequest(req, res) {
  console.log('INCOMING REQUEST:' + req.method + ' ' + req.url);
  if (req.url == '/albums.json') { handleListAlbums(req, res); }
  else if (req.url.substr(0, 7) == '/albums' &&
           req.url.substr(req.url.length - 5) == '.json') {
    handleGetAlbum(req, res);
  } else { sendFailure(res, 404, invalidResource()); }
}


function handleListAlbums(req, res) {
  loadAlbumList((err, albums) => {
      if (err) {
        sendFailure(res, 500, err);
        return;
      }

      sendSuccess(res, {albums: albums});
  });
}


function handleGetAlbum(req, res) {
  // request format: /albums/albumName.json
  var albumName = req.url.substr(7, req.url.length - 12);

  loadAlbum(albumName, (err, albumContents) => {
      if (err && err.error == 'nuSuchAlbum') { sendFailure(res, 404, err); }
      else if (ierr) { sendFailure(res, 500, err); }
      else { sendSuccess(res, {albumData: albumContents}); }
   });
}


function makeError(err, msg) {
  var e = new Error(msg);

  e.code = err;
  return e;
}


function sendSuccess(res, data) {
  var output = {error: null, data: data};

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(output) + '\n');
}


function sendFailure(res, serverCode, err) {
  var code = err.code || err.name; // (err.code) ? err.code : err.name;

  res.writeHead(serverCode, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({error: code, message: err.message}) + '\n');
}


function invalidResource() {
  return makeError('invalidResource', 'The requested resource does not exist.');
}


function noSuchAlbum() {
  return makeError('noSuchAlbum', 'The specified album does not exist');
}
