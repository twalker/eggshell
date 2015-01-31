import {assert} from 'chai'
import app from '../src/app'

describe('app', function(){

  describe('.init', function(){

    it('should exist', function(){
      assert(app.init);
    });

  });
});
