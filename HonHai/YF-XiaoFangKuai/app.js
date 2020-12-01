var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs  = require('express-handlebars');
var helper = require('handlebars-helpers')();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', exphbs({
//     partialsDir: 'views/partials',
//     layoutsDir: 'views/layouts',
//     defaultLayout: 'main',
//     extname: '.hbs',
//     helpers: {
//       sayHello: function () { alert("Hello World") },
//       getStringifiedJson: function (value) {
//           return JSON.stringify(value);
//       }
//     }
// }));
// app.set('view engine', '.hbs');

var handlebars = exphbs.create({
    partialsDir: 'views/partials',
    layoutsDir: 'views/layouts',
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      section: function(name, options){
        if(!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
      sayHello: function () { alert("Hello World") },
      getStringifiedJson: function (value) {
          return JSON.stringify(value);
      }
  },
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');



// hbsHelper.registerHelper('css', function(str, option) { 
//   //在上下文中创建一个数组用来保存该页面需要用到的css文件 
//   this.cssList = this.cssList || []; this.cssList.push(str); 
// });

// app.set('view engine', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '/public')));
// app.use(express.static(__dirname + '/public'));

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

module.exports = app;
