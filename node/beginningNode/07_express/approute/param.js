const express = require('express');


let app = express();
app.get('/user/:userID', function(req, res) {
    res.send('userID is: ' + req.params['userID']);
});
app.listen(3000);
