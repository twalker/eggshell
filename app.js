var express = require('express'),
	routes = require('./routes'),
	eggs = require('./routes/eggs'),
	http = require('http'),
	path = require('path'),
	stylus = require('stylus'),
	nib = require('nib');

var app = express();

app
	.set('port', process.env.PORT || 3000)
	.set('views', __dirname + '/views')
	.set('view engine', 'jade')
	.use(express.favicon())
	.use(express.logger('dev'))
	.use(express.bodyParser())
	.use(app.router)
	.use(stylus.middleware({
		src: path.join(__dirname, 'public'),
		compile: compileCss
	}))
	.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/api/eggs', eggs.list);
app.get('/client-tests/:name?', require('./routes/client-tests').show);

function compileCss(str, path) {
	return stylus(str)
		.set('filename', path)
		.set('compress', true)
		.use(nib());
}

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});