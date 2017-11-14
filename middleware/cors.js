// return func(h http.Handler) http.Handler {
//     return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
//         w.Header().Set("Access-Control-Allow-Origin", "*")
//         if r.Method == "OPTIONS" {
//             w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
//             w.Header().Set("Access-Control-Allow-Headers", "Content-Type,Authorization")
//             w.WriteHeader(http.StatusOK)
//         } else {
//             h.ServeHTTP(w, r)
//         }
//     })
// }

function cors(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
        res.retHeader('Access-Control-Allow-Headers',  'Content-Type,Authorization')
        res.statusCode = 200
        res.end()
    }
}