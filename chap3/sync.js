const fs = require('fs');

// 동기 + blocking방식
// 순서대로 처리를 하고, Blocking이 발생하기 때문에 비효율적이고, 마지막 사용자의 대기시간이 점점길어짐
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
let data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
let data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
let data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());
