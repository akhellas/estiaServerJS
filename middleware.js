const mapLimit = require('map-limit');

function noop() {}

function httpMiddleware (req, res, arr, done) {
    done = done || noop
  
    mapLimit(arr, 1, iterator, done)
  
    function iterator (fn, next) {
      if (fn.length === 3) {
          return fn(req, res, next)
      }
      fn(req, res)
      next()
    }
  }

  module.exports = {
      httpMiddleware: httpMiddleware
  }