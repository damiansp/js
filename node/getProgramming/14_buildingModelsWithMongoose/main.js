'use strict';

const express = require('express');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const errorController = require('./controllers/errorController');
const homeController = require('./controllers/homeController');

const PORT = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/recipe', {useNewUrlParser: true});
const db = mongoose.conection;


app.set('port', process.env.PORT || PORT);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(layouts);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get('/name', homeController.respondWithName);
app.get('/items/:vegetable', homeController.sendReqParam);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('POST Successful!');
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
});
