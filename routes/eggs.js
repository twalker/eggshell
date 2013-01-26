/*
 * GET eggs json.
 */
exports.list = function(req, res){
	res.json([
		{id: 1, name: 'brown', cracked: false},
		{id: 2, name: 'blue', cracked: false}
	]);
};