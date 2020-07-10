const express = require('express');

const port = 3000,
  app = express();

app.get('/', (req, res) => { res.send("Howdy, Pard'ner!"); })
  .listen(port, () => {
      console.log(`Express.js server listening on port ${port}`);
  });
