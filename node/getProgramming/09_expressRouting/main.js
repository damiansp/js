const express = require('express');

const port = 3000;
const app = express();

app.get('/items/:vegetable', (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.use((req, res, next) => {
    console.log(`request made to ${req.url}`);
    next();
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('POST Successful!');
});

app.listen(port, () => { console.log(`Server running on port ${port}`); });


/* Test with 
 * > curl --data "name=Bob&surname=Dobolina" http://localhost:3000
 */
