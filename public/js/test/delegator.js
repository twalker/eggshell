require(['require', 'mocha', 'chai',
		'backbone',
		'views/mixins/delegator'
	], function(require, mocha, chai, Backbone, delegator){

	// Setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe("delegator", function() {
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

		it("should delegate to model properties and methods", function(){
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


		it("should delegate to collection properties and methods", function(){
			assert(delCollectionView.name, 'sweetness');
			assert(delCollectionView.count, 1);
			assert(delCollectionView.where({name: 'foo'}), 1);
		});

	});

	// Start runner
	mocha.run();
});
