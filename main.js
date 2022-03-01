const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3001;

app.get('/wod', (req, res) => {
  res.set('Content-Type', 'text/plain;charset=utf-8');

  res.send('Run 200 meters')
})

app.listen(port, hostname)