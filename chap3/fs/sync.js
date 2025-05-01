const fs = require('fs');
const path = require('path');

// 노드에서는 동기는 블로킹, 비동기는 논블로킹으로 봐도 무방함
// 비동기는 실행시킨 순서를 보장하지 않음
// fs.readFile은 비동기함수: 콜백 함수를 백그라운드로 보내는데, 백그라운드에서는 job이 동시에 실행되는데 그 순서는 보장할 수 없음 
const data1 = fs.readFileSync(path.join(__dirname, 'readme.txt'));
const data2 = fs.readFileSync(path.join(__dirname, 'readme.txt'));
const data3 = fs.readFileSync(path.join(__dirname, 'readme.txt'));
const data4 = fs.readFileSync(path.join(__dirname, 'readme.txt'));
console.log('1번', data1.toString());
console.log('2번', data2.toString());
console.log('3번', data3.toString());
console.log('4번', data4.toString());