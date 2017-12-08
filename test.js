var expect = require('chai').expect
  , perf = require('./')

describe('perf', function() {
  it('should be completely unobtrustive', function() {
    var fn = function(d){ return 'foo' + d }
    expect(perf(fn)('5')).to.be.eql(fn('5'))
  })

  it('should be able to add optional message', function() {
    var fn = function(d){ return 'foo' + d }
    expect(perf(fn, 'perf')('5')).to.be.eql(fn('5'))
  })

  it('should be work with promises', function(done) {
    var fn = function(d){ return Promise.resolve().then(d => count++) }
      , result = perf(fn, 'perf')('5')
      , count = 0

    expect(result).to.be.an.instanceOf(Promise)
    expect(count).to.be.eql(0)
    result.then(d => {
      expect(count).to.be.eql(1)
      done()
    })
  })

})