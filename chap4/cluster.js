const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// 현재 프로세스가 부모 프로세스인 경우
if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디 = ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log(`code=${code}, signal=${signal}`);
        cluster.fork();
    });
}
// 현재 프로세스가 자식 프로세스인 경우
else {
    http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
        res.write('hello');
        res.end();
        // 자식 프로세스의 존재를 확인하기 위해 1초마다 강제 종료
        setTimeout(() => {
            process.exit(1);
        }, 1000);

    }).listen(8080);

    console.log(`${process.pid} 번 프로세스 실행`);
}