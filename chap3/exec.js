// child process는 노드 프로세스 말고 다른 프로세스 하나를 더 띄움
// exec을 하게되면 프로그램을 실행하는데, 일반적으로 terminal을 실행하게됨
const exec = require('child_process').exec;
// exec('ls -al') 은 터미널에 ls -al이라고 친거랑 똑같음
let process = exec('ls -al');

process.stdout.on('data', function (data) {
    console.log(data.toString());
});

process.stderr.on('data', function (data) {
    console.error(data.toString());
});