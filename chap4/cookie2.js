const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const parseCookie = (cookieStrArr) => {
    const cookiStrArrs = cookieStrArr.trim().split(';');
    const result = {}
    for (const cookieStr of cookiStrArrs) {
        const nameValue = cookieStr.split('=');
        result[nameValue[0]] = nameValue[1];
    }
    return result;
}

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `${req.protocol}://${req.headers.host}`);
    const url = urlObj.pathname;
    const cookieStrArr = req.headers.cookie;
    if (!cookieStrArr) {
        if (url === '/login') {
            res.writeHead(302, {Location: '/', 'content-type': 'text/plain; charset=utf-8;', 'set-cookie': `name=${encodeURIComponent(urlObj.searchParams.get('name'))}; httponly; path=/; max-age=5` });
            res.end();
        }
        else {
            if (url === '/') {
                const read = fs.readFile(path.join(__dirname, 'cookie2.html'));
                read.then((data) => {
                    res.write(data);
                    res.end();
                });
            }
            else {
                res.statusCode = 404;
                res.end();
            }
        }
    }
    else {
        if (url === '/') {
            const cookieObj = parseCookie(cookieStrArr);
            res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8;' });
            res.write(`${decodeURIComponent(cookieObj.name)} 님 환영합니다.`);
        }
        else {
            res.statusCode = 404;
        }
        res.end();
    }
})

server.listen(8080);