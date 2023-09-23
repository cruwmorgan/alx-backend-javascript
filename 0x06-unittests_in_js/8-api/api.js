const express = require('express');

const app = express();
const port = 7865;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
