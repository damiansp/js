const express = require('express');

const PORT = 3000;
const app = express();


app.set('port', process.env.PORT || PORT);

app.get('/', (req, res) => { res.send('Welcome to Confetti Cuisine!'); });

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
});
