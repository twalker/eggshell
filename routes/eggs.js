/*
 * Serves eggs for Backbone consumption.
 */
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var eggs = [
  {id: 0, name: 'brown', cracked: false},
  {id: 1, name: 'blue', cracked: false},
  {id: 2, name: 'green', cracked: false}
];

var list = function list(req, res){
  res.json(eggs);
};

var update = function update(req, res) {
  var json = req.body;
  eggs[json.id] = json;
  console.log('%s egg updated', json.name);
};

router.use(bodyParser.json());
router.put('/eggs/:id', update);
router.get('/eggs', list);

module.exports = router;
