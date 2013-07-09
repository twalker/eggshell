require(['require', 'mocha', 'chai',
		'backbone', 'flyweight'
	], function(require, mocha, chai, Backbone, Flyweight){

	// Setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe("Flyweight(constructor, fnKey)", function() {
		var FlyModel, FlyModelChild;

		beforeEach(function(){
			FlyModel = Backbone.Model.extend({});
			FlyModelChild = FlyModel.extend({});

			FlyModel = Flyweight(FlyModel, function(options){
				if(options && options.id) return "mymodel." + options.id;
			});

		});

		it("should extend a constructor to return cached instances when they exist", function(){
			var flyModel = new FlyModel({id: 'foo'});
			var flyModel2 = new FlyModel({id: 'foo'});
			var flyModel3 = new FlyModel({id: 'bar'});

			assert.equal(flyModel, flyModel2)
			assert.notEqual(flyModel, flyModel3);
			assert.equal(flyModel3.id, 'bar');
		});

		it("should not cache instances where the keyFn argument returns a falsy value", function(){
			var flyModel = new FlyModel({id: 'foo'});
			var flyModelNoId = new FlyModel();
			var flyModelNoId2 = new FlyModel();

			assert.notEqual(flyModel, flyModelNoId);
			assert.notEqual(flyModelNoId2, flyModelNoId);
			//console.log(Object.keys(Flyweight.cache))
		});

		it('should not flyweight child (extended) models', function(){
			var flyModel = new FlyModel({id: 'parent'});
			var flyChild = new FlyModelChild({id: 'parent'});
			var flyChild2 = new FlyModelChild({id: 'parent'});

			assert.notEqual(flyModel, flyChild)
			assert.notEqual(flyModel, flyChild2)
		});

	});

	// Start runner
	mocha.run();
});
