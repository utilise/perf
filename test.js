var expect = require('chai').expect
  , perf = require('./')

describe('perf', function() {
  it('should time fast fn', function() {
    var fn = String
    expect(perf(fn)).to.be.below(1)
  })

  it('should time slow fn', function() {
    var fn = function(){ for (var i = 0; i < 1000000; i++) Math.pow(Math.random(),5) }
    expect(perf(fn)).to.be.above(1)
  })

})