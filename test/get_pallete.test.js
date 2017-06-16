const assert = require('../server.js');
var getPallete = require('../lib/get_pallete')


describe ('getPallete', function() {
  it ('should return an array with 3 elements', function () {
    assert.equal(3, getPallete().length)
  })
})


// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
// 
// describe('CREATE promise', function() {
//   it('should resolve and invoke callback done', function(done) {
//     crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'})
//     .then(function() {
//       done()
//     })
//     .catch(function(err) {
//       done(err)
//     })
//   })
// })