const http = require('http')
const MongoClient = require('mongodb').MongoClient

const mw = require('./middleware').httpMiddleware
const auth = require('./middleware/auth').auth
const login = require('./middleware/auth').login

const context = (req, res) => req.context = { user: 'anonymous' }

const log = (req, res) => console.log(`${req.headers.host} ${req.method} ${req.url} ${req.context.user} ${JSON.stringify(req.body)}`)
const ok = (req, res) => { res.statusCode = 200 }

const adapters = [
    context,
    login,
    auth,
    log,
    ok
]

const url = "mongodb://admin:Adm.123@ds243085.mlab.com:43085/estiag";

const server = http.createServer((req, res) => {
    var done = res.end.bind(res)
    mw(req, res, adapters, done);
})

server.listen(8080)