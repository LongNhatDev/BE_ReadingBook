var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/user.route');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log("Connected");
  }
});

app.use('/api/user', userRouter);
app.use('/api/v1/users', users);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
