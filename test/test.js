var assert = require('assert');
var manhattan = require('../manhattan.js');

describe('manhattan', function() {
  describe('#three_to_six', function() {
    it('should convert a 3-digit hex to a 6-digit hex',
      function() {
      assert.equal('ff0000', manhattan.three_to_six('f00'));
      assert.equal('0000ff', manhattan.three_to_six('00f'));
    });
  });
});
