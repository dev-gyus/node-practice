const http = require('http');

const server = http.createServer((req, res) => {
    req.on('end', () => {
        console.log('req end');
    });
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>hello</h1>');
    res.end();
});

server.listen(8080, () => {
    console.log('server listen on 8080 port');
});

server.on('error', (error) => {
    console.error(error);
})