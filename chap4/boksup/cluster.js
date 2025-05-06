const cluster = require('cluster');
const cpuNUMs = require('os').cpus().length;
const http = require('http');

if (cluster.isMaster) {
    // master 프로세스일 경우 자식 프로세스 생성
    for (let i = 0; i < cpuNUMs; i++) {
        const worker = cluster.fork();
        console.log(`${worker.process.pid} 생성`);
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid} 종료`);
        console.log(`code = ${code} / signal = ${signal}`);
        // cluster.fork();
    });
}
else {
    http.createServer((req, res) => {
        res.write('hello cluster ');
        res.end();
        setTimeout(() => process.exit(1), 1000);
    }).listen(3000);
}