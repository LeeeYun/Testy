var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var session = require('express-session');
var usersRouter = require('./routes/users');

var app = express();
app.set('views', path.join(__dirname, 'views')); // view engine setup
app.set('view engine', 'ejs');

app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


app.use('/js', express.static(path.join(__dirname, 'node_modules','bootstrap','dist','js'))); // redirect bootstrap JS
app.use('/jquery', express.static(path.join(__dirname, 'node_modules','jquery','dist'))); // redirect JS jQuery
app.use('/css', express.static(path.join(__dirname, 'node_modules','bootstrap','dist','css'))); // redirect CSS bootstrap

app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;