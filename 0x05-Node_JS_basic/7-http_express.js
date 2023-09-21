const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  let dbInfo = 'This is the list of our students\n';
  await countStudents(process.argv[2])
    .then((msg) => {
      dbInfo += msg;
      res.end(dbInfo);
    })
    .catch((err) => {
      dbInfo += err.message;
      res.end(dbInfo);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
