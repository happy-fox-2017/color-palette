const should = require('chai').should();
const getPallete = require('../lib/get_pallete');

describe('#indexOf', function(){
  it('should return an array with 3 elements', function() {
    getPallete().should.have.lengthOf(3);
  });
});
