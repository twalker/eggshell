
define(function(require){
	var Backbone = require('backbone'),
		jQuery = require('jquery'),
		Commits = require('collections/commits'),
		CommitsView = require('views/commits');

	return Backbone.Router.extend({
		routes: {
			'commits': 'list'
		},

		initialize: function(options){
			this.elRoot = options.elRoot;
		},

		list: function(){
			console.log('list');
			var commits = new Commits();
			var commitsView = new CommitsView({collection: commits});
			this.elRoot.html(commitsView.el);

			commits.fetch();

		}


	});
});

