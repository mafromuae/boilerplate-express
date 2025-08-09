require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

// Logger middleware should come first to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

// Serve index.html on root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve JSON on /json path
app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
