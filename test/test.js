const assert = require('assert');
const test = require('../lib/get_pallete.js');

describe('getPalleteFunction',() => {
  it("should return 3",()=>{
    assert.equal(3,test.getPalette().length)
  })
})

describe('getPalleteFunction',() => {
  it("should return #E0E4CC",() =>{
    let index1 = test.getPalette()
    assert.equal('#E0E4CC',index1[0])
  })
})