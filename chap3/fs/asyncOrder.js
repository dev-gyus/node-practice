const fs = require('fs');
const path = require('path');

// 비동기로 순서를 주게 되면 이 js 파일을 여러번 실행하게 되는경우 이점이 있다
// sync 방식으로 아래 파일을 4번 읽는 스크립트 파일을 10번 호출하면 4 * 10번의 blocking이 발생하는데 
// 아래처럼 async 콜백 함수 안에 파일을 읽게 만든다면, 호출하는 입장에서는 10개의 비동기 태스크가 백그라운드에서 동시에 실행되므로
// 더 효율적이다
fs.readFile(path.join(__dirname, 'readme.txt'), (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile(path.join(__dirname, 'readme.txt'), (err, data) => {
        if (err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile(path.join(__dirname, 'readme.txt'), (err, data) => {
            if (err) {
                throw err;
            }
            console.log('3번', data.toString());
            fs.readFile(path.join(__dirname, 'readme.txt'), (err, data) => {
                if (err) {
                    throw err;
                }
                console.log('4번', data.toString());
            });
        });
    });
});

