const fs = require('fs');
const path = require('path');

// stream 방식의 경우 buffer 대비 적은 용량의 단위인 chunk를 여러번 전송하고, 이를 최종적으로 합쳐서 큰 용량의 파일을 전송하는 방식
// buffer나 stream이나 어짜피 제한된 데이터만큼 데이터를 누적해서 전송한다는 개념은 같지만
// buffer는 1GB의 데이터 전송시 1GB를 전부 다 읽어서 한 번에 전송하는 개념
// stream은 1MB 단위의 chunk를 1024번 읽어서 전송하는 개념
// 결국 같은 1GB의 파일을 전송하는데, 버퍼는 서버의 메모리가 1GB가 필요하고, stream방식은 1MB 정도만 있어도 충분하다

const readStream = fs.createReadStream(path.join(__dirname, 'readme3.txt'), { highWaterMark: 16} );
const data = [];

// 스트림방식으로 파일을 읽을때 chunk 단위로 데이터를 읽을때마다 실행하는 콜백 함수를 정의
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
});

// 파일을 전부 다 읽었을 때 실행할 콜백 함수를 정의
readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
});

// 스트림 방식으로 읽다가 예외발생할때 처리
readStream.on('error', (err) => {
    console.log('error:', err);
})