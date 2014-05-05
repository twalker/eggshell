define([], function() {
  "use strict";
  var __moduleName = "character.es6";
  var Character = function Character(name) {
    this.name = name;
  };
  ($traceurRuntime.createClass)(Character, {attack: function(character) {
      console.log(this.name, ' attacking  and stuff ', character);
    }}, {});
  return {
    get Character() {
      return Character;
    },
    __esModule: true
  };
});
