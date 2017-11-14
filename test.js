const mw = require('http-middleware')
const http = require('http')

http.createServer((req, res) => {
  const fns = [
    (req, res) => res.write('oh yeah!'),
    (req, res, next) => { 
      res.statusCode = 200
      next()
    }
  ]
  mw(req, res, fns, res.end)
}).listen(1337)