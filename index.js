const express = require('express');
const app = express();
const port = 8000;

const PASSWORD = 123;

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.get('/:hello', (req, res) => {
  res.send('Response ' + req.params.hello);
});

app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});