const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3001;

const options = [
  '沙拉',
  '牛排',
  '炒饭',
  '日料',
  '炒青菜',
  '拉面',
  '辣子鸡',
  '炒肉',
  '炒鸡蛋',
  '酸奶杯',
]

app.get('/wod', (req, res) => {
  res.set('Content-Type', 'text/plain;charset=utf-8');

  const rand = Math.floor(Math.random() * options.length)
  res.send(options[rand])
})

app.listen(port, hostname, () => {
  console.log(`server on: http://${hostname}:${port}`);
})
