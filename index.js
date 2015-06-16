var log = require('log')('[perf]')
  , client = require('client')

module.exports =  function perf(fn) {
  var start = client ? performance.now() : process.hrtime()
  fn()
  var diff = client ? performance.now() - start : process.hrtime(start)
  !client && (diff = (diff[0] * 1e9 + diff[1])/1000)
  return log(diff, 'ms', fn.name), diff
}