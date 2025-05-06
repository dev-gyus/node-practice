const http = require('http');
const fs = require('fs').promises;
const path = require('path');


const server = http.createServer((req, res) => {
    const url = new URL(req.url, `${req.protocol}://${req.headers.host}`);
    const pathname = url.pathname;
    if (pathname === '/') {
        const rf = fs.readFile(path.join(__dirname, 'public/main.html'));
        rf.then(data => {
            res.write(data);
            res.end();
        }).catch(err => {
            console.error(err);
        });
    }
    else if (pathname === '/test') {
        res.write(JSON.stringify({ 'test': 1234 }));
        res.end();
    }
    else if (pathname === '/cookie') {
        const cookieStr = req.headers.cookie;
        if (!cookieStr) {
            res.writeHead(200, {
                'content-type': 'application/json; charset=utf-8',
                'set-cookie': 'name=session; httponly; max-age=10; path=/'
            });
            res.write('쿠키 생성 완료');
        }
        else {
            res.writeHead(200, {
                'content-type': 'application/json; charset=utf-8'
            });
            res.write('이미 쿠키가 존재합니다.');
        }
        res.end();
    }
    else if (pathname === '/insert') {
        const chunks = [];
        req.on('data', (chunk) => {
            chunks.push(chunk);
        });
        req.on('end', () => {
            console.log(chunks.toString());
            res.writeHead(302, { location: '/' });
            res.end();
        })
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => console.log('server listening on 3000 port'));
server.on('error', (err) => {
    console.error(err);
})