var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mangoRouter = require('./routes/mango');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var Mango = require("./models/mango");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mango', mangoRouter);
app.use('/addmods',addmodsRouter);
app.use('/selector', selectorRouter);

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
const connectionString = process.env.MONGO_CON

mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Mango.deleteMany();
 
 
  var results = [{"types":"Russet Pairi mango","expdate":'Red',"cost":20},
                 {"types":"Red badami mango","expdate":'Yellow',"cost":25},
                 {"types":"Petite chausa mango", "expdate":'White',"cost":15}]
 
 for(i in results){
  let instance = new Mango({types: results[i]["types"], colours: results[i]["colours"], cost:results[i]["cost"]});
   instance.save( function(err,doc) {
     if(err) return console.error(err);
     console.log("object added.")
     });
 }
 
 }
 
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;
