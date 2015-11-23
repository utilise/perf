var expect = require('chai').expect
  , perf = require('./')

describe('perf', function() {
  it('should be completely unobtrustive', function() {
    var fn = function(d){ return 'foo' + d }
    expect(perf(fn)('5')).to.be.eql(fn('5'))
  })

  it('should be be able to add optional message', function() {
    var fn = function(d){ return 'foo' + d }
    expect(perf(fn, 'perf')('5')).to.be.eql(fn('5'))
  })

})