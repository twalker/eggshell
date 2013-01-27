var express = require('express'),
	routes = require('./routes'),
	eggs = require('./routes/eggs'),
	http = require('http'),
	path = require('path');

var app = express();


app
	.set('port', process.env.PORT || 3000)
	.set('views', __dirname + '/views')
	.set('view engine', 'jade')
	.use(express.favicon())
	.use(express.logger('dev'))
	.use(express.bodyParser())
	.use(app.router)
	.use(require('stylus').middleware(__dirname + '/public'))
	.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/api/eggs', eggs.list);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});

// live reload
var livereload = require('livereload');
var server = livereload.createServer({exts: ['styl', 'css', 'js']});
server.watch(__dirname + "/public");