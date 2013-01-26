
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: require('../package.json').name });
};