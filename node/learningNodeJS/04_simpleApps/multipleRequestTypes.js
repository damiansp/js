var http = require('http'),
  fs     = require('fs'),
  url    = require('url');
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


function loadAlbum(albumName, page, pageSize, callback) {
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
          // slice fails gracefully if params out of range
          var start = page * pageSize;
          var ps = onlyFiles.slice(start, start + pageSize);
          var obj = {shortName: albumName, photos: ps};

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
  req.parsed_url = url.parse(req.url, true);
  var coreUrl = req.parsed_url.pathname;

  if (coreUrl == '/albums.json' && req.method.toLowerCase() == 'get') {
    handleListAlbums(req, res);
  } else if (coreUrl.substr(coreUrl.length - 12) == '/rename.json'
             && req.method.toLowerCase() == 'post') {
    handleRenameAlbum(req, res);
  } else if (coreUrl.substr(0, 7) == '/albums'
             && coreUrl.substr(coreUrl.length - 5) == '.json'
             && req.method.toLowerCase() == 'get') {
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
  // Get GET params
  var getp = req.parsed_url.query;
  var pageNum = getp.page ? parseInt(getp.page) : 0;
  var pageSize = getp.page_size ? parseInt(getp.page) : 1000;

  if (isNaN(parseInt(pageNum))) { pageNum = 0; }
  if (isNaN(parseInt(pageSize))) { pageSize = 1000; }
  
  // request format: /albums/albumName.json
  var coreUrl = req.parsed_url.pathname;
  var albumName = coreUrl.substr(7, coreUrl.length - 12);

  loadAlbum(albumName, pageNum, pageSize, (err, albumContents) => {
      if (err && err.error == 'nuSuchAlbum') { sendFailure(res, 404, err); }
      else if (err) { sendFailure(res, 500, err); }
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


function handle_rename_album(req, res) {
  // 1. Get album name from URL
  var core_url = req.parsed_url.pathname;
  var parts = core_url.split('/');

  if (parts.length != 4) {
    send_failures(res, 404, invalid_resource());
    return;
  }

  var album_name = parts[2];

  // 2. Get the POST data for the request. This will have the JSON for the new
  //    album name.
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

  // 3. 

    
}
