const express = require('express');

const port = 3000;
const app = express();

app.get('/items/:vegetable', (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => { console.log(`Server running on port ${port}`); });
