/**
 * ajax
 * An ES6 Promise wrapper for jQuery.ajax to cast jQuery.Deferreds as ES6 Promises.
 */
import {Promise} from 'es6-promise'
import jQuery from 'jquery'

export default function ajax(){
  return Promise.resolve(jQuery.ajax.apply(jQuery, arguments));
}

