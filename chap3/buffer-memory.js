const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

// Buffer방식
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);

console.log('buffer:', process.memoryUsage().rss);