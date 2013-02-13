/*
 * GET eggs json.
 */
 var eggs = [
		{id: 0, name: 'brown', cracked: false},
		{id: 1, name: 'blue', cracked: false},
		{id: 2, name: 'green', cracked: false}
];

exports.list = function(req, res){
	res.json(eggs);
};

exports.update = function(req, res) {
	var json = req.body;
	eggs[json.id] = json;
	console.log('%s egg updated', json.name);
};