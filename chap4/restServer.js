const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try{
        if (req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile('./chap4/restFront.html');
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(data);
            } else if(req.url === '/about'){
                const data = await fs.readFile('./chap4/about.html');
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(data);
            } else if(req.url === '/users') {
                res.writeHead(201, {'Content-Type' : 'application/json; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }

            try {
                const data = await fs.readFile(`./chap4/${req.url}`)
                return res.end(data);
            } catch (err){
            }
            
        } else if(req.method == 'POST'){
            let body = '';

            // Stream방식. Chunk를 모아서 반환해줌
            req.on('data', (data) => {
                body += data;
            });

            return req.on('end', () => {
                console.log('POST 본문(Body):', body);
                const { name } = JSON.parse(body);
                const id = Date.now();
                users[id] = name;
                res.writeHead(201, {'Content-Type' : 'application/json; charset=utf-8'});
                return res.end('ok');
            })
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    }catch (err){
        console.log(err);
    }
})