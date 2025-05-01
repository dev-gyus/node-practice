const fs = require('fs');
const path = require('path');
// 약 680MB 파일
const filePathName = path.join(__dirname, 'big.txt');
const filePathName2 = path.join(__dirname, 'big2.txt');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync(filePathName);
fs.writeFileSync(filePathName2, data1);
console.log('buffer: ', process.memoryUsage().rss);

// 약 680MB정도 더 사용한 것으로 나타남