import http from "http"

const port = 3000

const server = http.createServer((req, res) =>{
    res.end("We are making this work")
})

server.listen(port)