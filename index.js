const express = require('express');
const app = express();
const port = 8000;

const PASSWORD = 123;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/encode/:text', (req, res) => {
  res.send('Item ' + req.params.id);
});

app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});