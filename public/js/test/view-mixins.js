require([
	'mocha',
	'chai',
	'jquery',
	'backbone',
	'views/mixins/classy',
	'views/mixins/showable',
	'views/mixins/delegator'
], function(mocha, chai, jQuery, Backbone, classy, showable, delegator){

	// setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe('view mixins', function() {

		describe('classy', function() {
			var View = Backbone.View.extend(classy);
			var view = new View();
			var $fixture = view.$el;

			it('adds css classes', function(){
				view.addClass('hi mom');
				assert($fixture.hasClass('hi mom'));
			});
			it('removes css classes', function(){
				view.removeClass('hi mom');
				assert.isFalse($fixture.hasClass('hi mom'));
			});
			it('toggles css classes off', function(){
				view.toggleClass('mom', false);
				assert.isFalse($fixture.hasClass('mom'));
			});
			it('toggles css classes on', function(){
				view.toggleClass('mom', true);
				assert($fixture.hasClass('mom'));
			});
		});

		describe('showable', function(){
			var View = Backbone.View.extend(showable);

			var view = new View();
			var $fixture = view.$el;

			jQuery(document.body).append(view.$el);


			it('shows the view\'s root element and reports if root element isVisible', function(){
				view.show();
				assert($fixture.is(':visible'));
				assert(view.isVisible());
			});
			it('hides the view\'s root element and reports if root element isVisible', function(){
				view.hide();
				assert.isFalse($fixture.is(':visible'));
				assert.isFalse(view.isVisible());
			});

		});

		describe('delegator', function() {
			var SweetModel = Backbone.Model.extend({
				modelProp: 'property',
				modelMethod: function(){
					return this.get('name');
				},
				modelAdd: function(a, b){
					return a + b;
				}
			});
			var model = new SweetModel({name: 'foo' });

			var DelagatorView = Backbone.View.extend({
				delProp: delegator('modelProp'),
				delMethod: delegator('modelMethod'),
				delAddFunction: delegator('modelAdd')
			});
			var delView = new DelagatorView({model: model});

			it('should delegate to model properties and methods', function(){
				assert(delView.delProp, 'property');
				assert(delView.delMethod(), 'foo');
				assert(delView.delAddFunction(2,3), 5);
			});

			var SweetCollection = Backbone.Collection.extend({
				name: 'sweetness'
			});
			var collection = new SweetCollection(model);

			var DelCollectionView = Backbone.View.extend({
				name: delegator('name'),
				count: delegator('size'),
				where: delegator('where')
			});
			var delCollectionView = new DelCollectionView({collection: collection});


			it('should delegate to collection properties and methods', function(){
				assert(delCollectionView.name, 'sweetness');
				assert(delCollectionView.count, 1);
				assert(delCollectionView.where({name: 'foo'}), 1);
			});

		});

	});

	// Start runner
	mocha.run();
});
