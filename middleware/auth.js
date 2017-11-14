const jwt = require('jsonwebtoken');

// // WithAuth ...
// func WithAuth() Adapter {
// 	return func(next http.Handler) http.Handler {
// 		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// 			token, err := request.ParseFromRequest(r, request.AuthorizationHeaderExtractor, func(token *jwt.Token) (interface{}, error) {
// 				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
// 					return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
// 				}
// 				return repositories.MySigningKey, nil
// 			})

// 			if err == nil {
// 				if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
// 					ctx := context.WithValue(r.Context(), UserContextKey, claims["sub"])
// 					next.ServeHTTP(w, r.WithContext(ctx))
// 				} else {
// 					w.WriteHeader(http.StatusUnauthorized)
// 					fmt.Fprint(w, "Token is not valid")
// 				}
// 			} else {
// 				w.WriteHeader(http.StatusUnauthorized)
// 				fmt.Fprint(w, "Unauthorised access to this resource")
// 			}
// 		})
// 	}
// }

function login(req, res) {
    if (req.method === 'POST' && req.url.endsWith('/login')) {
        req.on('data', (chunk) => {
            if (!req.body) {
                req.body = []
            }
            req.body.push(chunk)
          }).on('end', () => {
            req.body = Buffer.concat(req.body).toString()
            var json = JSON.parse(req.body)
            console.log(json)
          });
          
    }
}

function auth(req, res) {
    var header = req.headers['authorization']
    if (!header) {
        res.statusCode = 401
        res.end()
        return
    }
    var token = header.substring(6)
    if (!token) {
        res.statusCode = 401
        res.end()
        return
    }
    req.context.token = token 
    jwt.decode(token)
}

module.exports = { 
    login: login,
    auth: auth 
}