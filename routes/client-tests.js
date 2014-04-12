/*
  client-tests shows a client-side unit test, and links to others.
*/
var fs = require('fs')
  , path = require('path')
  , express = require('express')
  , router = express.Router();

var show = function show(req, res){
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

router.get('/:name?', show);

module.exports = router;
