/**
* Model mixin to add accessor method for an attribute (getter and setter).
* Delegates to model.get() or model.set() method depending on whether or not
* a value was provided.
*
* @example
* var Model = Backbone.Model.extend({
*   name: accessor('name')
* });
* var m = new Model({name: 'sid'});
* m.name() // 'sid'
* m.name('johnny')
* m.name() // 'johnny'
**/
export default function(attribute) {
  return function(value) {
    if (value) {
      return this.set(attribute, value);
    } else {
      return this.get(attribute);
    }
  };
}
