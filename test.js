var expect = require('chai').expect
  , perf = require('./')

describe('perf', function() {
  it('should time fast fn', function() {
    var fn = String
    expect(perf(fn)()).to.be.below(1)
  })

  it('should time slow fn', function() {
    var fn = function(){ for (var i = 0; i < 1000000; i++) Math.pow(Math.random(),5) }
    expect(perf(fn)()).to.be.above(1)
  })

  it('should be completely unobtrustive', function() {
    var fn = function(d){ return 'foo' + d }
    expect(perf(fn)('5')).to.be.eql(fn('5'))
  })

  it('should be be able to add optional message', function() {
    var fn = function(d){ return 'foo' + d }
    expect(perf(fn, 'perf')('5')).to.be.eql(fn('5'))
  })

})