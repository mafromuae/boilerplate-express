require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

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
