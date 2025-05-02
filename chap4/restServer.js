const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const users = {};

const handler = (req, res) => {
    const urlObj = new URL(req.url, `${req.protocol}://${req.host}`);
    const url = urlObj.pathname;
    const paths = url.split('/');
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const rs = fs.readFile(path.join(__dirname, 'restFront.html'));
        rs.then(data => {
            res.write(data);
            res.end();
        })
    }
    else if (url === '/restFront.css') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const rs = fs.readFile(path.join(__dirname, 'restFront.css'));
        rs.then(data => {
            res.write(data);
            res.end();
        })
    }
    else if (url === '/restFront.js') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const rs = fs.readFile(path.join(__dirname, 'restFront.js'));
        rs.then(data => {
            res.write(data);
            res.end();
        })
    }
    else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const rs = fs.readFile(path.join(__dirname, 'about.html'));
        rs.then(data => {
            res.write(data);
            res.end();
        })
    }
    else if (url === '/users') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.write(JSON.stringify(users));
        res.statusCode = 200;
        res.end();
    }
    else if (url === '/user') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        if (method === 'POST') {
            console.log('/users post 요청');
            const arr = [];
            req.on('data', (chunk) => {
                arr.push(chunk);
            });
            req.on('end', () => {
                const addObj = JSON.parse(arr.toString());
                users[addObj.name] = addObj.name;
            })
            res.statusCode = 201;
        }
        res.end();
    }
    else if (paths.length > 2) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        if (method === 'PUT') {
            const arr = [];
            req.on('data', (chunk) => arr.push(chunk));
            req.on('end', () => {
                const modifyNameObj = JSON.parse(arr.toString());
                users[modifyNameObj.name] = modifyNameObj.name;
                delete users[paths[paths.length - 1]];
            })
        }
        else if (method === 'DELETE') {
            console.log(paths[paths.length - 1]);
            delete users[paths[paths.length - 1]];
        }
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end();
    }
}

const server = http.createServer(handler);
server.listen(8080, () => console.log('server listen on 8080 port'));
server.on('error', (err) => console.error(err));