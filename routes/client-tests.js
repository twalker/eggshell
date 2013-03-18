/*
	client-tests shows a client-side unit test, and links to others.
*/
var fs = require('fs'),
	path = require('path');

exports.show = function(req, res){
	var testpath = path.join(__dirname, '..', 'public/js/test');
	fs.readdir(testpath, function(err, files){
		var rexJsExt = /\.js$/;
		var testFiles = files
			// no directories, please
			.filter(rexJsExt.test, rexJsExt)
			// and remove js extension
			.map(function(file){ return file.replace(rexJsExt, ''); })
			.sort();

		res.render('client-tests', {name: req.params.name, names: testFiles});
	});
};
