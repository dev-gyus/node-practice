const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(__dirname, 'writeStream.txt'));
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
})

writeStream.write('글 쓰기 \n');
writeStream.write('글 쓰기 \n');
writeStream.write('글 쓰기 \n');
writeStream.end();