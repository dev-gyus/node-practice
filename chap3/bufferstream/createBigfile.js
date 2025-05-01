const fs = require('fs');
const path = require('path');
const filePathName = path.join(__dirname, 'big.txt');

const ws = fs.createWriteStream(filePathName);

for (let i = 0; i < 10_000_000; i++) {
    ws.write('안녕하세요. 매우 큰 파일을 만들어 볼 것입니다. \n');
}
ws.end();