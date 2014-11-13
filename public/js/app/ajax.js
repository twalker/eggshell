/**
 * ajax
 * An ES6 Promise wrapper for jQuery.ajax to cast jQuery.Deferreds as ES6 Promises.
 */
define(['jquery', 'es6-promise'], function(jQuery, Promise){
  return function ajax(){
    return Promise.resolve(jQuery.ajax.apply(jQuery, arguments));
  };
});
