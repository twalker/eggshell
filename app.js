var express = require('express'),
  routes = require('./routes'),
  eggs = require('./routes/eggs'),
  mocki = require('./routes/mocki'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus'),
  nib = require('nib'),
  pkg = require('./package.json');

var app = module.exports = express();

app
  .set('port', process.env.PORT || 3000)
  .set('views', __dirname + '/views')
  .set('view engine', 'jade')
  .set('name', pkg.name)
  .set('version', pkg.version)
  .use(express.favicon('public/img/favicon.ico'))
  .use(express.logger('dev'))
  .use(express.bodyParser())
  .use(app.router)
  // use mock json files for api requests
  .use('/api', mocki())
  .use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    compile: compileCss
  }))
  .use(express.static(path.join(__dirname, 'public')));

app.configure('development', function(){
  app.use(express.errorHandler());
});

// spa
app.get('/', routes.index);

// client-tests
app.get('/client-tests/:name?', require('./routes/client-tests').show);

// manual routes to egg resources
//app.get('/api/eggs', eggs.list);
//app.put('/api/eggs/:id', eggs.update);

function compileCss(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});