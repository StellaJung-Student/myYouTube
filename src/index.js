const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('뚱');
});

app.get('/star', (req, res) => {
  res.send('* <br> ***');
});

app.listen(5000, () => {
  console.log(`server working @ http://localhost:5000`);
});
