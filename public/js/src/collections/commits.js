
/**
 * Commits collection.
 */
define(function(require){
	var Backbone = require('backbone'),
		Commit = require('models/commit');

	return Backbone.Collection.extend({
	//return Paginator.clientPager.extend({
		url: function(){
			// basic auth
			//curl -u "username:pwd" https://api.github.com/repos/wordfly/Pop.Ems.Website/commits/
			//return "https://api.github.com/repos/documentcloud/backbone/issues"
			return 'https://api.github.com/repos/twalker/eggshell/commits';
		},

		model: Commit

	});
});