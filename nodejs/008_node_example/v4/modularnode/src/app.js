var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs')

//rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'..', 'views'));
app.set('view engine', 'hbs');


// hbs.registerPartials(path.join(path.join(__dirname,'..', "views"),"partials"));
const folderViews = path.join(__dirname, '..', "views")
const folderPartials = path.join(__dirname, '..', "views", "partials")
const folderPartialsLayout = path.join(__dirname, '..', "views", "partials", "layout")
hbs.registerPartials(folderPartials);

const PartialsUtil = require('./helpers/hbs/PartialsUtil')
PartialsUtil.importAllHBSFromDirWithPrefix({partialsDir:folderPartials, prefixoRegister:'partials'})
PartialsUtil.importAllHBSFromDirWithPrefix({partialsDir:folderPartialsLayout, prefixoRegister:'partials/layout'})


// const fs = require('fs')
// //hbs partials
// var dir = path.join(__dirname,'..', 'views', 'partials');
// console.log(dir);
//
// const walkSync = (dir, filelist = []) => {
//   fs.readdirSync(dir).forEach(file => {
//
//     filelist = fs.statSync(path.join(dir, file)).isDirectory()
//         ? walkSync(path.join(dir, file), filelist)
//         : filelist.concat(path.join(dir, file));
//
//   });
//   return filelist;
// }
//
// var filelist = walkSync(dir);
// if (filelist.length > 0) {
//   filelist.forEach(function (filename) {
//     console.log('filename ', filename)
//     var matches = /^([^.]+).hbs$/.exec(path.basename(filename));
//     if (!matches) {
//       return;
//     }
//     var name = matches[1];
//     var pathPartial = filename.split(dir).join('').split('\\').join('/')
//     console.log('UUU',name, matches, pathPartial);
//     pathPartial.replace('/')
//     console.log('blkau: ' +pathPartial.split(matches[0]) )
//
//     var template = fs.readFileSync(filename, 'utf8');
//     hbs.registerPartial('a'+pathPartial, template);
//     // hbs.registerPartial(name, template);
//   });
// }



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
