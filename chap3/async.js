// 비동기, 동기 테스트. 노드에서 비동기는 Non Blocking / 동기는 Blocking이라고 보면됨
// file system은 비동기 메소드임 => 순서보장이 되지 않는다
const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err){

    }
    console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err){

    }
    console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err){

    }
    console.log('3번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err){

    }
    console.log('4번', data.toString());
});
