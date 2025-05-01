const fs = require('fs');
const path = require('path');
// 약 708MB 파일
const filePathName = path.join(__dirname, 'big.txt');
const filePathName2 = path.join(__dirname, 'big3.txt');

console.log('before: ', process.memoryUsage().rss);

const rs = fs.createReadStream(filePathName);
const ws = fs.createWriteStream(filePathName2);
rs.pipe(ws);
rs.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
})

// 결과는 약 50MB정도 메모리를 추가로 더 사용한 것으로 나타나는데, 이는 노드 서버를 실행하고 프로세스를 진행하면서 사용한 메모리들도 포함이기 때문에
// 실질적으로는 50MB보다 더 적게 메모리를 사용한 것으로 볼 수 있음