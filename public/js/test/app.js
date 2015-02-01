
import chai from 'chai'
import app from '../../app/app'

var assert = chai.assert;

describe('app', function(){

  describe('.init', function(){

    it('should exist', function(){
      assert(app.init);
    });

  });
});
