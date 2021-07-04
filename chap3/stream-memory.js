const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

// Stream 방식. 대용량 파일에 대해서는 Stream방식으로 보내주는게 메모리 효율상 좋음
// Buffer방식은 메모리에 모아서 한방에 전송해주는 방식이니 서버의 가용 메모리가 부족할 가능성이 높아짐
const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);

readStream.on('end', () =>{
    console.log('stream:', process.memoryUsage().rss);
});