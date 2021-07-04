const fs = require('fs');
const zlib = require('zlib'); // 압축 라이브러리

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip(); // 압축스트림
const writeStream = fs.createReadStream('./writeme3.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream); // 압축해서 write함