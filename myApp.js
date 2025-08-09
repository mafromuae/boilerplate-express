const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.json({"message": "Hello json"})
});



module.exports = app;
