var express = require('express');
var indexRouter = require('./routes/index');
var clientRouter = require('./routes/client');

var app = express();

// Parse application/json and application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/clients', clientRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).json({ error: true });
});

module.exports = app;
