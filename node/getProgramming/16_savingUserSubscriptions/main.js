"use strict";

const express = require('express'),
  layouts = require('express-ejs-layouts'),
  mongoose = require('mongoose');

const homeController = require('./controllers/homeController'),
  errorController = require('./controllers/errorController'),
  subscribersController = require('./controllers/subscribersController');

const PORT = 3000;
const  app = express();


mongoose.connect('mongodb://localhost:27017/confetti_cuisine',
                 {useNewUrlParser: true});


app.set('view engine', 'ejs');
app.set('port', process.env.PORT || PORT);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(layouts);
app.use(express.static('public'));

app.get('/', (req, res) => { res.render('index'); });
app.get('/courses', homeController.showCourses);
app.get('/contact', subscribersController.getSubscriptionPage);
app.get('/subscribers', subscribersController.getAllSubscribers);
app.post('/contact', homeController.postedSignUpForm);
app.post('/subscribe', subscribersController.saveSubscriber);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
