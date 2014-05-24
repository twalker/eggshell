System.register([], function($__0) {
  "use strict";
  var Character;
  return {
    exports: {
      get Character() {
        return Character;
      },
      set Character(value) {
        Character = value;
      }
    },
    execute: function() {
      Character = (function() {
        var Character = function Character(name) {
          this.name = name;
        };
        return ($traceurRuntime.createClass)(Character, {attack: function(character) {
            console.log(this.name, ' attacking  and stuff ', character);
          }}, {});
      }());
    }
  };
});
