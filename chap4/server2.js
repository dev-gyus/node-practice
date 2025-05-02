const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const handler = async (req, res) => {
    try {
        const fileBuffer = await fs.readFile(path.join(__dirname, 'example.html'));
        res.write(fileBuffer.toString());
        res.end();
    } catch (err) {
        console.error(err);
    }
}

const server = http.createServer(handler);
server.listen(8080, () => console.log('server listene on 8080 port'));
