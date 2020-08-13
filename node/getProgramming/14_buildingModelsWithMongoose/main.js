'use strict';

const express = require('express');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//const errorController = require('./controllers/errorController');
//const homeController = require('./controllers/homeController');

const PORT = 3000;
const SUBSCRIBER_SCHEMA = mongoose.Schema({name: String,
                                           email: String,
                                           zipCode: String});
const Subscriber = mongoose.model('Subscriber', SUBSCRIBER_SCHEMA);
const app = express();

mongoose.connect('mongodb://localhost:27017/recipe', {useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB with Mongoose');
});


let subscriber1 = new Subscriber({name: 'Bob Dobolina',
                                  email: 'bobdob@dob.com'});
subscriber1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});

// Create and save in a single step
Subscriber.create(
  {name: 'Orville Reddenbacher', email: 'ored@pop.com'},
  function (error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
  });
/*

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

*/
