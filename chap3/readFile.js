// 파일시스템 접근하기, CallBack 방식
// const fs = require('fs');

// Promise방식으로 쓸수도있음
const fs = require('fs').promises;

// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     // FileSystem의 readFile()로 읽은 data는 Binary Data이므로 이를 사람이 읽으려면 .toString같은걸로 변환해줘야함
//     console.log(data);
//     console.log(data.toString());
// });

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });