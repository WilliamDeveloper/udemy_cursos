var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var formidable = require('formidable')
var path = require('path')
var http = require('http')
var socket = require('socket.io')

// configurando session no redis
const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()
// var session = require('express-session')
// var RedisStore = require('connect-redis')(session)
// var session = require('express-session')
// var connectRedis = require('connect-redis')
// var RedisStore = connectRedis(session)



var adminRouter = require('./routes/admin');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//configurando socket io
var http = http.Server(app)
var io = socket(http)
io.on('connection', function (socket) {
  console.log('io-connection')
})


app.use((req,res,next)=>{

  if(req.method === 'POST')   console.log('app.js-post ', req.url, req.method, req.body, req.fields, req.params)

  let listToIgnoreFormidable = [
    '/admin/login',
    '/contacts',
    '/reservations',
    '/subscribe'
  ]
  //if(req.method === 'POST' && req.url !== '/admin/login' ){
  if(req.method === 'POST' && !listToIgnoreFormidable.includes(req.url) ){
    console.log('PORRRRRRRAAAAAAA')
    var form = formidable.IncomingForm({
      uploadDir : path.join(__dirname,"/public/images"),
      keepExtensions:true
    })

    form.parse(req, (error, fields, files)=>{
      req.fields = fields
      req.files = files

      console.log('form-parse')
      next()
    })
  }else{
    console.log('else-')
    next()
  }



})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  store: new RedisStore({
    client:redisClient,
    host:'localhost',
    port: 6379
  }),
  secret:'p@ssw0rd',
  resave:true,
  saveUninitialized : true
}))

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));// comentar essa linha para o formidable funcionar
app.use(cookieParser());













app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter)

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

http.listen(3000, function () {
  console.log('server rodando')
})

// comentado por causa do socket io
// module.exports = app;
