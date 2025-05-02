const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'set-cookie': 'name=gyus; httponly=true; samesite=strict;' })
    res.end();
})

server.listen(8080);