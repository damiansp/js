const express = require('express');


let app = express();
app.param('userID', function(req, res, next, userID) {
    res.write('Looking up user: ' + userID + '\n');
    // sim user lookup and load it into the req obj for later middleware
    req.user = {userID: userID};
    next();
});
app.get('/user/:userID', function(req, res) {
    res.end('user is: ' + JSON.stringify(req.user));
});
app.listen(3000);
