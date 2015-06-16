var expect = require('chai').expect
  , perf = require('./')

describe('perf', function() {
  it('should time fast fn', function() {
    var fn = String
    expect(perf(fn)).to.be.below(20)
  })

  it('should time slow fn', function() {
    var fn = function(){ for (var i = 0; i < 100000; i++) i^5 }
    expect(perf(fn)).to.be.above(20)
  })

})