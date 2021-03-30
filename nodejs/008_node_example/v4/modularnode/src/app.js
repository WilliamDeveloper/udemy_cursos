var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var hbs = require('hbs')
var hbs = require('express-hbs')


const PartialsUtil = require('./helpers/hbs/PartialsUtil')

//rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

var app = express();

const folderViews = path.join(__dirname,'..', 'views')
const folderViewsLayouts = path.join(folderViews, "layouts")
const folderViewsPartials = path.join(folderViews, "partials")



// registrar todos partials recursivamente apartir da pasta partials
PartialsUtil.importAllHBSPartialsRecursiveFromFolder({partialsDir:folderViewsPartials})
// PartialsUtil.importAllHBSPartialsRecursiveFromFolder({partialsDir:folderViewsLayouts})

// view engine setup
app.set('view engine', 'hbs');

// configure the view engine
app.engine('hbs', hbs.express4({
  defaultView: 'default',
  defaultLayout: path.join(folderViewsLayouts,'default.hbs'),
  layoutsDir: folderViewsLayouts,
  partialsDir: folderViewsPartials
}));

app.set('views', folderViews );





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//caminhos staticos
app.use(express.static(path.join(__dirname,'..', 'public')));


//usar rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello',helloRouter)



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
