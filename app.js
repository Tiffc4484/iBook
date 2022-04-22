const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(session);
const mongo = require("./server_node/src/mongo");
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRouter = require('./server_node/routes/index');
const usersRouter = require('./server_node/routes/users');
const authRouter = require('./server_node/routes/authentication');

const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
mongoose.connect('mongodb+srv://tiffanychen:A1fal4khAfBLpk7J@ibook.qkr0m.mongodb.net/iBook_database?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});
console.log("Connecting to the database.");

const store = new MongoDBStore({
  uri: url,
  collection: "mySessions",
});

app.use(
    session({
      secret: "iBook",
      resave: false,
      saveUninitialized: false,
      store: store,
      cookie: { secure: false },
      expires: 24 * 3600 * 1000,
    })
);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);//获取请求源 这样所有请求就都有访问权限了
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next()
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.use(express.static(path.join(__dirname, 'frontend')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, console.log("App Running on http://localhost:3001"));

module.exports = app;
