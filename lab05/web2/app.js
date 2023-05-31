var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var bodyParser =  require("body-parser");


//1. khai báo thư viện mongoose
var mongoose = require("mongoose");

//2. khai báo uri của local & cloud DB
//uri1 : local DB connection string
var uri1 = "mongodb://localhost:27017";
//uri2 : cloud DB connection string
var uri2 = "mongodb+srv://longndt:xxxxxx@cluster0.idtjj4e.mongodb.net/";

//3. check kết nối DB
mongoose.connect(uri1)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', indexRouter);
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

app.listen(3003);

module.exports = app;
