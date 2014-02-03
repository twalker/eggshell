/**
 * iframes provides a nicer api for an iframe.
 * borrowing ideas/implementation from:
 * https://github.com/maxogden/iframe
 * https://github.com/bigpipe/frames
 *
 */
define(function(require){
  /*
  desired members:
    remove
    iframe
    document
    window
    ready?
    query?
    querySelector?
    onResize?
    styles?
    html?
  */

  var proto = {

    append: function(){
      return this.parent.appendChild(this.el);
    },

    remove: function(){
      //return this.parent.removeChild(this.el);
      if(this.isAttached()) this.parent.removeChild(this.el);
    },

    isAttached: function(){
      return !!document.body.contains(this.el);
    },

    load: function load(url){
      // I'd wnat a deffered, which brings in jquery, avoid jquery!
      // Perhaps user should handle loading outside of this module.
    },

    document: function doc(){
      return this.window().document;
    },

    window: function win(){
      var i = this.el;
      return i.contentWindow ||
        (i.contentDocument ? i.contentDocument.parentWindow || {}
        : {});
    }
  };

  return function iframe(parent, options){
    var instance = Object.create(proto);
    instance.parent = parent;
    var el = instance.el = document.createElement('iframe');
    el.setAttribute('frameBorder', 0);

    return instance;
  };
});
