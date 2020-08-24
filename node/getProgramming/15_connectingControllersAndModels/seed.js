const mongoose = require('mongoose');

const Subscriber = require('./models/subscriber');


mongoose.connect('mongodb://localhost:27017/recipe', {useNewParser: true});
mongoose.connection;

let contacts = [{name: 'Damian Phillips',
                 email: 'damiansp@gmail.com',
                 zipCode: '97402'},
                {name: 'Chef Eggplant',
                  email: 'eggplant@recipeapp.com',
                  zipCode: '20331'},
                {name: 'Professor Souffle'
                  email: 'souffle@recipeapp.com',
                  zipCode: '19103'}];

Subscriber.deleteMany().exec().then(() => {
    console.log('Subcriber data are empty!')
});

let commands = [];

contacts.forEach((c) => {
    commands.push(Subscriber.create({name: c.name, email: c.email}));
});

Promise.all(commands)
  .then(r => {
      console.log(JSON.stringify(r));
      mongoose.connection.close();
  }).catch(error => { console.log(`ERROR: ${error}`); });


