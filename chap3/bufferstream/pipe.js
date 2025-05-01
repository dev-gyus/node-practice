const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'readme3.txt'), { highWaterMark: 16 } );
const writeStream = fs.createWriteStream(path.join(__dirname, 'writeStream.txt'));
const zlibStream = zlib.createGzip();
const writeZlibStream = fs.createWriteStream(path.join(__dirname, 'writeStream.txt.gz'));

// readstream에서 읽은 chunk를 writeStream에 그대로 전송하는 기능 (readStream -> writeStream이 연결된 모습이 파이프를 연결한것 처럼 보인다해서 파이프라이닝이라고 함)
readStream.pipe(writeStream);

// readStream에서 읽은 chunk를 zlibStream에 전송해 gz 방식으로 압축하고, 그 데이터를 다시 writeZlibStream에 전송해서 gz 파일 생성
readStream.pipe(zlibStream).pipe(writeZlibStream);