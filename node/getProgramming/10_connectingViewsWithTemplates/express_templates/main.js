'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const homeController = require('./controllers/homeController');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || port);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.get('/name', homeController.respondWithName);
app.get('/name/:myName', homeController.respondWithName);
//app.get('/items/:vegetable', homeController.sendReqParam);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('POST Successful!');
});

app.listen(port, () => {
    console.log(`Server running at "http://localhost:${app.get('port')}"`);
});
