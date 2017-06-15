const assert = require('assert');
const test = require('../lib/get_pallete.js');

describe("get_palette_func", function () {
  it("should return 3", function () {
    assert.equal(3,test.getPalette().length)
  })
})

describe("getPalette_func", function () {
  it("should return -1", function () {
    let palette = test.getPalette()
    assert.equal(-1, palette.indexOf("a"))
  })
})

describe("getPalette_func", function () {
  it("should return #69D2E7", function () {
    let palette = test.getPalette()
    assert.equal('#69D2E7', palette[0])
  })
})
