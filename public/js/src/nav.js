/**
 * nav manages pushState navigation and emits navigation events.
 *
 */
define(function(require){
	var Backbone = require('backbone'),
		mixer = require('mixer');

	var nav = {
		// Start watching for navigation events
		start: function(){
			var startingUrl = '/';
			// Browsers without pushState (IE9) need the root/page url in the hash
			if (!(window.history && window.history.pushState)) {
				window.location.hash = window.location.pathname.replace(startingUrl, '');
				startingUrl = window.location.pathname;
			}

			Backbone.history.start({ pushState: true, root: startingUrl });
		},

		// Navigate to provided path using pushState
		go: function(path){
			var from = Backbone.history.getFragment();
			var to = path;
			Backbone.history.navigate(to, {trigger: true});

			// fire a global event
			nav.trigger('nav:go', to);
		},

		// reload the current url, firing the route again.
		reload: function(){
			Backbone.history.loadUrl(Backbone.history.fragment);
		},

		hardRedirectTo: function(url){
			window.location.href = url;
		},

		// global link handler that prevents default and uses pushState instead.
		// e.g. $('a[data-pushlink="spa"]').on('click', nav.onPushLink.bind(nav));
		onPushLinkClick: function(e){
			e.preventDefault();
			var url = e.currentTarget.getAttribute('href');
			this.go(url);
		}

	};

	// mixin events
	mixer.mixin(nav, Backbone.Events);

	return nav;

});
