'use strict';

const express = require('express');
const layouts = require('express-ejs-layouts');

const errorController = require('./controllers/errorController');
const homeController = require('./controllers/homeController');


const PORT = 3000;
const app = express();



app.set('port', process.env.PORT || PORT);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(layouts);
        
app.get('/', (req, res) => { res.render('index'); });
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedSignUpForm);
app.get('/courses', homeController.showCourses);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
});
