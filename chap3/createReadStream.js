const fs = require('fs');

// Stream Buffer 기본용량 = 64kb
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // <- 16 Byte로 버퍼 용량 설정

const data = [];

// 특정 파일을 특정 buffer용량만큼 Stream해서 전송될때마다 호출됨
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

// Stream이 종료될경우 호출
readStream.on('end', (chunk) => {
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error: ', err);
})