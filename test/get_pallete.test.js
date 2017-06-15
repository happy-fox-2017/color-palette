var chai = require('chai');
var assert = chai.assert;
var getPallete = require('../lib/get_pallete.js');

describe('getPallete', function() {
  it('should return an array with 3 elements', function() {
    assert.equal(getPallete().length, 3);
  })
})
