var express = require('express'),
    path = require('path'),
    Twit = require('twit');

var app = express();
var T = new Twit(require('./keys.json'));

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.configure(function(){
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.static(path.join(__dirname, 'public')));
});

/**
 * Root
 */
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('Twitter API is running...');
});

//http://localhost:8080/timeline?count=100
app.get('/timeline', function (req, res) {
    T.get('statuses/home_timeline', req.query, function(err, data, response) {
      return res.json(data);
    })
});

//http://localhost:8080/myplace?lat=-38.7116780&long=-62.2680780
app.get('/myplace', function(req, res) {
  T.get('/trends/closest', req.query, function(err, data, response) {
      return res.json(data);
  })
});

//http://localhost:8080/trends?id=23424747
app.get('/trends', function(req, res) {
  T.get('/trends/place', req.query, function(err, data, response) {
      return res.json(data);
  })
});

//http://localhost:8080/search?q=%23TanBionicaCocaColaFM
app.get('/search', function(req, res) {
  T.get('/search/tweets', req.query, function(err, data, response) {
      return res.json(data);
  })
});

//http://localhost:8080/show?id=1011417658833551361
app.get('/show', function (req, res) {
  T.get('statuses/show/'+req.query.id, function(err, data, response) {
    return res.json(data);
  })
});

//http://localhost:8080/show?id=1011417658833551361
app.get('/user_timeline', function (req, res) {
  T.get('statuses/user_timeline',req.query, function(err, data, response) {
    return res.json(data);
  })
});

//http://localhost:8080/user?id=123456
app.get('/user', function (req, res) {
  T.get('users/show',req.query, function(err, data, response) {
    return res.json(data);
  })
});

//http://localhost:8080/loggedInUserProfile
app.get('/loggedInUserProfile', function (req, res) {
  T.get('account/verify_credentials',req.query, function(err, data, response) {
    return res.json(data);
  })
});

app.post('/update_profile_picture', function (req, res) {
  T.post('account/update_profile_image',req.body, function(err, data, response) {
    console.log(req.body);
    return res.json(data);
  })
});

app.listen(8080);
