var express = require('express')
  , http = require('http')
  , path = require('path')
  , stylus = require('stylus')
  , nib = require('nib')
  , pkg = require('./package.json');

var app = module.exports = express();

app
  .set('port', process.env.PORT || 3000)
  .set('views', __dirname + '/views')
  .set('view engine', 'jade')
  .set('name', pkg.name)
  .set('version', pkg.version)
  .use(require('static-favicon')('public/img/favicon.ico'))
  .use(require('morgan')('dev'))
  .use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    compile: function compileCss(str, path) {
      return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib());
    }
  }))
  .use(express.static(path.join(__dirname, 'public')));

// spa home view -- routing handled w/pushState on the client
app.get('/', function(req, res){
  res.render('index', { title: require('./package.json').name });
});

// client-tests
//app.get('/client-tests/:name?', require('./routes/client-tests').show);
app.use('/client-tests', require('./routes/client-tests'));

// use mock json files for api requests
app.use('/api',require('mocki')());
// OR, manual api routes to egg resources (when not using mocki)
//app.use('/api', require('./routes/eggs'))

// error handling
if('production' !== app.get('env')){
  app.use(require('errorhandler')({ dumpExceptions: true, showStack: true }));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
