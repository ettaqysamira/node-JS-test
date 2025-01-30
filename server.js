const http = require('http')
const fs = require('fs')

const port = 3002

const server = http.createServer((req, res) => {
    fs.readFile('./server.html', (err, content) => {
        if (err) {
            res.writeHead(400, { "Content-Type": "text/plain" })
            res.end("Erreur")
        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content)
        }
    })
})

server.listen(port)